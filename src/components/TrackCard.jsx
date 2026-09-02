export default function TrackCard(props) {
  const track = props.track;
  const isActive = track !== null && track !== undefined;

  return (
    <div className="mt-8 bg-white text-center octagonee-12 p-6">
      <h2 className="text-2xl font-spotify font-bold mb-4">ACTIVE TRACK:</h2>
      {isActive ? (
        <div className="bg-white text-left">
          <p className="text-lg"><b>TITLE OF THE TRACK:</b> {track.title}</p>
          <p className="text-lg"><b>GENRE:</b> {track.genre}</p>
          <p className="text-lg"><b>ARTIST:</b> {track.artist}</p>
          <p className="text-lg"><b>Rating / BPM:</b> {track.rating} / 100</p>
          <p className="text-lg"><b>Label:</b> {track.label}</p>
          <p className="text-lg"><b>Role:</b> {track.role}</p>
        </div>
      ) : (
        <p className="text-lg">Select a track from the table to see its details!</p>
      )}
    </div>
  )
}