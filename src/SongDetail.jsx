import { useSelector } from "react-redux";

const SongDetail = () => {
  const songSelected = useSelector(store => store.selectedSong);

  if (!songSelected) {
    return <div>Select a Song!</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {songSelected.title}
        <br />
        Length: {songSelected.length}
      </p>
    </div>
  );
};

export default SongDetail;
