module.exports = {

  index: function (req, res) {
    return res.render('notes/index')
  },

  show: function (req, res) {
    return res.render('notes/show')
  }

};

