import axios from './ins'

export const fetchTrack = () => {
  return new Promise((resolve, reject) => {
    axios.get('/playerctrl/track')
      .then(({ data }) => resolve(data.track))
      .catch(error => reject(error))
  })
}

export const fetchArtUrl = () => new Promise((resolve, reject) => {
  axios.get('/playerctrl/artUrl')
    .then(({ data }) => resolve(data.artUrl))
    .catch(error => reject(error))
})

export const fetchStatus = () => new Promise((resolve, reject) => {
  axios.get('/playerctrl/status')
    .then(({ data }) => resolve(data.status))
    .catch(error => reject(error))
})

export const previous = () => new Promise((resolve, reject) => {
  axios.post('/playerctrl/previous')
    .then(() => resolve())
    .catch(error => reject(error))
})

export const pause = () => new Promise((resolve, reject) => {
  axios.post('/playerctrl/play-pause')
    .then(() => resolve())
    .catch(error => reject(error))
})

export const next = () => new Promise((resolve, reject) => {
  axios.post('/playerctrl/next')
    .then(() => resolve())
    .catch(error => reject(error))
})
