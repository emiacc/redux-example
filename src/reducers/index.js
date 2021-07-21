import { combineReducers } from "redux";

const defaultSongList = [
  { title: "Come Together", length: "4:19" },
  { title: "Something", length: "3:02" },
  { title: "Maxwell's Silver Hammer", length: "3:27" },
  { title: "Oh! Darling", length: "3:27" },
  { title: "Octopus's Garden", length: "2:51" }
];

const songsReducer = (state = defaultSongList, action) => {
  return state;
};

const selectedSongReducer = (state = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return state;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
