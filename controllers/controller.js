const controller = {
  getPosts: (req, res) => {
    res.send('posts');
  },

  getComments: (req, res) => {
    res.send('comments');
  },
};

module.exports = controller;
