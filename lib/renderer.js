// executed in context of window renderer
function parseArgs () {
  if (!window.location.search) {
    window.__args__ = {}
  } else {
    var search = window.location.search.slice(1)
    window.__args__ = Object.freeze(JSON.parse(decodeURIComponent(search)))
  }
}

module.exports = {
  parseArgs: parseArgs
}
