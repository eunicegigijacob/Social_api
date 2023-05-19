const axios = require('axios');
const fetchDataUrl = 'https://jsonplaceholder.typicode.com';

const controller = {
  getPosts: async (req, res) => {
    try {
      const limit = req.query.limit || 10;
      const response = await axios.get(`${fetchDataUrl}/posts?_limit=${limit}`);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getComments: async (req, res) => {
    try {
      const limit = req.query.limit || 10;
      const response = await axios.get(
        `${fetchDataUrl}/comments?_limit=${limit}`
      );
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = controller;
