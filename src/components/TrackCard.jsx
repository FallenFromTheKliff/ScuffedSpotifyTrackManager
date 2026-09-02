export default function TrackCard(props) {
  const track = props.track;
  return (
    <div className="mt-8 border border-white octagonee-12 p-6">
      <h2 className="text-2xl font-spotify font-bold mb-4">ACTIVE TRACK:</h2>
      <div className="space-y-2">
        <p>Title: {track.title}</p>
        <p>Genre: {track.genre}</p>
        <p>Artist: {track.artist}</p>
        <p>Rating / BPM: {track.rating}</p>
        <p>Label: {track.label}</p>
        <p>Role: {track.role}</p>
      </div>
    </div>
  )
}