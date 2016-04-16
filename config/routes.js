module.exports.routes = {
  '/': {
    view: 'homepage'
  },

  '/notes': {
    view: 'notes/index'
  },

  '/notes/:id': {
    view: 'notes/show'
  }
};
