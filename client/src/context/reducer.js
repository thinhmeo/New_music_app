export const actionType = {
    SET_USER: "SET_USER",
    SET_ALL_USERS: "SET_ALL_USERS",
    SET_ALL_ARTISTS: "SET_ALL_ARTISTS",
    SET_ALL_ALBUMS: "SET_ALL_ALBUMS",
    SET_ALL_SONGS: "SET_ALL_SONGS",
    // Filter Types
    SET_FILTER_TERM: "SET_FILTER_TERM",
    SET_ARTIST_FILTER: "SET_ARTIST_FILTER",
    SET_LANGUAGE_FILTER: "SET_LANGUAGE_FILTER",
    SET_ALBUM_FILTER: "SET_ALBUM_FILTER",

    SET_ALERT_TYPE: "SET_ALERT_TYPE",
    SET_ISSONG_PLAYING: "SET_ISSONG_PLAYING",
    SET_SONG_INDEX: "SET_SONG_INDEX",
    SET_FAVORITE_SONGS: "SET_FAVORITE_SONGS",

};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case actionType.SET_ALL_USERS:
            return {
                ...state,
                allUsers: action.allUsers,
            };

        case actionType.SET_ALL_ARTISTS:
            return {
                ...state,
                allArtists: action.allArtists,
            };

        case actionType.SET_ALL_SONGS:
            return {
                ...state,
                allSongs: action.allSongs,
            };

        case actionType.SET_ALL_ALBUMS:
            return {
                ...state,
                allAlbums: action.allAlbums,
            };

        // Filter case
        case actionType.SET_FILTER_TERM:
            return {
                ...state,
                filterTerm: action.filterTerm,
            };

        case actionType.SET_ARTIST_FILTER:
            return {
                ...state,
                artistFilter: action.artistFilter,
            };

        case actionType.SET_LANGUAGE_FILTER:
            return {
                ...state,
                languageFilter: action.languageFilter,
            };

        case actionType.SET_ALBUM_FILTER:
            return {
                ...state,
                albumFilter: action.albumFilter,
            };

        case actionType.SET_ALERT_TYPE:
            return {
                ...state,
                alertType: action.alertType,
            };

        case actionType.SET_ISSONG_PLAYING:
            return {
                ...state,
                isSongPlaying: action.isSongPlaying,
            };

        case actionType.SET_SONG_INDEX:
            return {
                ...state,
                songIndex: action.songIndex,
            };

        case actionType.SET_FAVORITE_SONGS:
            return {
                ...state,
                favoriteSongs: action.favoriteSongs,
            };

        case actionType.REMOVE_FAVORITE:
            return {
                ...state,
                favoriteSongs: state.favoriteSongs.filter(song => song._id !== action.payload),
            };



        default:
            return state;
    }
};

export default reducer;