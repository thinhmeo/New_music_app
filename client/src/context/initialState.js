export const initialState = {
    user: null,
    allUsers: null,
    allSongs: null,
    allArtists: null,
    allAlbums: null,
    filterTerm: "all",
    artistFilter: null,
    languageFilter: null,
    albumFilter: null,
    alertType: null,
    isSongPlaying: false,
    songIndex: 0,
    favoriteSongs: JSON.parse(localStorage.getItem("favoriteSongs")) || [],
};