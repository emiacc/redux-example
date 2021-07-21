import { useSelector, useDispatch } from "react-redux";
import { selectSong } from "./actions";

const SongList = () => {
  const songs = useSelector(store => store.songs);
  const dispatch = useDispatch(); 

  const renderList = () => {
    return songs.map(song => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button className="ui primary button" onClick={() => dispatch(selectSong(song))}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  return <div className="ui divided list">{renderList()}</div>;
};

export default SongList;
