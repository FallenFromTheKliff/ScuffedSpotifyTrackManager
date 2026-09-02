import { useState, useEffect } from 'react';
import TrackCard from './components/TrackCard';
import TrackForm from './components/TrackForm';
import TrackTable from './components/TrackTable';

function App() {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState("");
  const [activeTrack, setActiveTrack] = useState("");
  const [creatorHighlight, setCreatorHighlight] = useState(false);
  const [showRegistry, setShowRegistry] = useState(false);

  const handleAdd = (tracked) => {
    setTracks((previousTracks) => [...previousTracks, tracked]);
    setShowRegistry(true);
  }

  const handleRowSelection = (trackTitle) => {
    setActiveTrack(trackTitle);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-4xl text-white font-spotify font-bold">Scuffed Spotify Track Manager</h1>
      {!showRegistry && (
        <TrackForm onAdd={handleAdd} />
      )}
    </div>
  )
}

export default App
