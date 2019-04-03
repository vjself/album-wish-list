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
    const { artwork } = req.body;
    const updateId = req.params.id;
    const updateIndex = userFavs.findIndex(album => album.id == updateId);
    let album = userFavs[updateIndex];

    userFavs[updateIndex] = {
      id: album.id,
      artist: album.artist,
      genre: album.genre,
      artwork: artwork || album.artwork
    };
    res.status(200).send(userFavs);
  },

  deleteFromFavs(req, res) {
    const deleteId = req.params.id;
    albumIndex = userFavs.findIndex(album => album.id == deleteId);
    userFavs.splice(albumIndex, 1);
    res.status(200).send(userFavs);
  }
};
