export default function TrackCard(props) {
  const track = props.track;
  const isActive = track !== null && track !== undefined;

  return (
    <div className="mt-8 border border-white octagonee-12 p-6">
      <h2 className="text-2xl font-spotify font-bold mb-4">ACTIVE TRACK:</h2>
      {isActive ? (
        <div className="space-y-2">
          <p>Title: {track.title}</p>
          <p>Genre: {track.genre}</p>
          <p>Artist: {track.artist}</p>
          <p>Rating / BPM: {track.rating}</p>
          <p>Label: {track.label}</p>
          <p>Role: {track.role}</p>
        </div>
      ) : (
        <p className="text-gray-400">Select a track from the table to see its details.</p>
      )}
    </div>
  )
}