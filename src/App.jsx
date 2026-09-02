import { useState, useEffect } from 'react';
import TrackCard from './components/TrackCard';
import TrackForm from './components/TrackForm';
import TrackTable from './components/TrackTable';

function App() {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [activeTrack, setActiveTrack] = useState("");
  const [creatorHighlight, setCreatorHighlight] = useState(false);
  const [showTracks, setShowTracks] = useState(false);

  const handleAdd = (track) => {
    setTracks((currentTracks) => [...currentTracks, track]);
  }
  const handleRowSelection = (title) => {
    setActiveTrack(title);
  }

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
    <div className="min-h-screen bg-black p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h1 className="text-4xl text-green-500 font-spotify font-bold mb-8 text-center">
          Scuffed Spotify Track Manager
        </h1>
        {showTracks ? (
          <div>
            <div className="flex justify-between mb-4">
              <button
                type="button"
                onClick={() => setShowTracks(false)}
                className="border octagonee-12 bg-white px-5 py-3 font-bold"
              >
                GO BACK
              </button>
              <button
                type="button"
                onClick={() => setCreatorHighlight(!creatorHighlight)}
                className="border octagonee-12 bg-white px-5 py-3 font-bold"
              >
                {creatorHighlight ? "SHOW ALL TRACKS" : "SHOW ONLY CREATORS"}
              </button>
            </div>
            <TrackTable
              tracks={tracks}
              onSelectTrack={handleRowSelection}
              creatorHighlight={creatorHighlight}
            />
            <TrackCard track={selectedTrack} />
          </div>
        ) : (
          <div className="max-w-xl mx-auto">
            <TrackForm onAdd={handleAdd} />
            <button
              type="button"
              onClick={() => setShowTracks(true)}
              className="border octagonee-12 bg-green-800 px-5 py-3 font-bold mt-4 w-full"
            >
              VIEW TRACKS
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;