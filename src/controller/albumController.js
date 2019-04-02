let userFavs = [];

module.exports = {
  getUserFavs(req, res) {
    res.status(200).send(userFavs);
  },

  filterFavAlbums(req, res) {},

  addToFavs(req, res) {
    const { id, artist, genre, artwork } = req.body;
    userFavs.push({ id, artist, genre, artwork });
    res.status(200).send(userFavs);
  },

  updateFavData(req, res) {
    // const updateId = req.params.id;
    // updateIndex = userFavs.findIndex(album => album.id == updateId);
    // res.status(200).send(userFavs);
  },

  deleteFromFavs(req, res) {
    const deleteId = req.params.id;
    albumIndex = userFavs.findIndex(album => album.id == deleteId);
    userFavs.splice(albumIndex, 1);
    res.status(200).send(userFavs);
  }
};
