const { Router } = require('express')
const { cmd } = require('../utils')

const router = Router()

// all the routes are prefixed using '/playerctrl'

router.get('/track', (_req, res) => {
  cmd('playerctl metadata --format "{{ artist }}: {{ title }}"')
    .then(track => res.status(200).json({ ok: true, track }))
    .catch(error => res.status(500).json({ ok: false, error }))
})

router.get('/artUrl', (_req, res) => {
  cmd('playerctl metadata --format "{{ mpris:artUrl }}"')
    .then(artUrl => res.status(200).json({ ok: true, artUrl }))
    .catch(error => res.status(500).json({ ok: false, error }))
})

router.post('/play-pause', (_req, res) => {
  cmd('playerctl play-pause')
    .then((_stdout) => res.status(200).json({ ok: true }))
    .catch(error => res.status(500).json({ ok: false, error }))
})

router.post('/next', (_req, res) => {
  cmd('playerctl next')
    .then(_stdout => res.status(200).json({ ok: true }))
    .catch(error => res.status(500).json({ ok: false, error }))
})

router.post('/previous', (_req, res) => {
  cmd('playerctl previous')
    .then(_stdout => res.status(200).json({ ok: true }))
    .catch(error => res.status(500).json({ ok: false, error }))
})

router.get('/status', (_req, res) => {
  cmd('playerctl status')
    .then(stdout => res.status(200).json({ ok: true, status: stdout }))
    .catch(error => res.status(500).json({ ok: false, error }))
})

module.exports = router
