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

  const handleHighlight = () => {
    setCreatorHighlight(!creatorHighlight);
  };

  useEffect(() => {
    let selected = null;

    for (let i = 0; i < tracks.length; i++) {
      if (tracks[i].title === activeTrack) {
        selected = tracks[i];
        break;
      }
    }

    setSelectedTrack(selected);
  }, [activeTrack, tracks]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-4xl text-white font-spotify font-bold">Scuffed Spotify Track Manager</h1>
      {!showRegistry && (
        <TrackForm onAdd={handleAdd} />
      )}
      {showRegistry && (
        <div>
          <TrackTable 
            tracks={tracks}
            onSelectTrack={handleRowSelection}
            creatorHighlight={creatorHighlight}
          />
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={handleHighlight}
              className="bg-green-500 px-4 py-2 rounded font-bold"
            >
              {creatorHighlight ? "SHOW ALL TRACKS" : "HIGHLIGHT ONLY CREATORS"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
