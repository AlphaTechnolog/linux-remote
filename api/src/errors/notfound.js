module.exports = (_req, res) => {
  res.status(404).json({ error: true, msg: 'Error 404: Route not found' })
}
