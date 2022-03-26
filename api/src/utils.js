const childProcess = require('child_process')

String.prototype.rstrip = function () {
  return this.replace(/\s+$/, "")
}

exports.cmd = cmd => new Promise((resolve, reject) => {
  childProcess.exec(cmd, (error, stdout, stderr) => {
    if (error) return reject(error)
    if (stderr) return reject(stderr)
    resolve(stdout.rstrip())
  })
})
