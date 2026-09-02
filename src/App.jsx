import { useState, useEffect } from 'react';
import TrackCard from './components/TrackCard';
import TrackForm from './components/TrackForm';
import TrackTable from './components/TrackTable';

function App() {
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState("");
  const [activeTrack, setActiveTrack] = useState("");
  const [creatorHighlight, setCreatorHighlight] = useState(false);
  const [showTracks, setShowTracks] = useState(false);

  const handleAdd = (track) => {
    setTracks((currentTracks) => {
      const updatedTracks = [];
      for (let i = 0; i < currentTracks.length; i++) {
        updatedTracks.push(currentTracks[i]);
      }
      updatedTracks.push(track);
      return updatedTracks;
    });
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
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-spotify bg-linear-to-t from-green-950 to-black">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h1 className="text-4xl text-green-500 font-bold mb-8">
          [ Scuffed Spotify Track Manager ]
        </h1>
        {showTracks ? (
          <div>
            <div className="flex justify-between mb-4">
              <button
                type="button"
                onClick={() => setShowTracks(false)}
                className="octagonee-12 bg-green-700 text-white px-5 py-3 font-bold hover:bg-green-900 duration-200 cursor-pointer"
              >
                GO BACK
              </button>
              <button
                type="button"
                onClick={() => setCreatorHighlight(!creatorHighlight)}
                className="octagonee-12 bg-green-700 text-white px-5 py-3 font-bold hover:bg-green-900 duration-200 cursor-pointer"
              >
                {creatorHighlight ? "UNHIGHLIGHT CREATORS" : "HIGHLIGHT CREATORS "}
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
              className="octagonee-12 bg-green-700 text-white p-4 font-bold mt-4 w-full hover:bg-green-900 duration-200 cursor-pointer"
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