import { useState } from 'react';

export default function TrackForm(props) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [artist, setArtist] = useState("");
  const [rating, setRating] = useState("");
  const [label, setLabel] = useState("");
  const [role, setRole] = useState("");

  const [titleError, setTitleError] = useState("");
  const [genreError, setGenreError] = useState("");
  const [artistError, setArtistError] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [labelError, setLabelError] = useState("");
  const [roleError, setRoleError] = useState("");

  const handleSubmit = (iwantitthatway) => {
    iwantitthatway.preventDefault();

    setTitleError("");
    setGenreError("");
    setArtistError("");
    setRatingError("");
    setLabelError("");
    setRoleError("");

    if (!title && !genre && !artist && !rating && !label && !role) {
      setTitleError("Please enter a track title!");
      setGenreError("Please select a genre!");
      setArtistError("Please enter an artist name!");
      setRatingError("Please enter a valid rating!");
      setLabelError("Please enter a label!");
      setRoleError("Please select a role!");
    } else if (!title) {
      setTitleError("Please enter a track title!");
    } else if (!genre) {
      setGenreError("Please select a genre!");
    } else if (!artist) {
      setArtistError("Please enter an artist name!");
    } else if (!rating) {
      setRatingError("Please enter a valid rating!");
    } else if (rating < 1 || rating > 100) {
      setRatingError("Rating / BPM must be between 1 and 100!");
    } else if (!label) {
      setLabelError("Please enter a label!");
    } else if (!role) {
      setRoleError("Please select a role!");
    } else {
      const tracked = {
        title: title,
        genre: genre,
        artist: artist,
        rating: rating,
        label: label,
        role: role
      };
      props.onAdd(tracked);

      setTitle("");
      setGenre("");
      setArtist("");
      setRating("");
      setLabel("");
      setRole("");
    }
  }

  return (
    <div className="w-xl h-full p-8 octagonee-12 bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <h4>Track Title</h4>
        <input 
          type="text"
          value={title}
          onChange={(iwantitthatway) => {
            setTitle(iwantitthatway.target.value);
            if (!iwantitthatway.target.value) {
              setTitleError("Please enter a track title!");
            }
          }}
          placeholder="Enter a track title"
        />
        <p className="text-red-500 text-xs h-4">{titleError}</p>
        <h4>Genre</h4>
        <select
          value={genre}
          onChange={(iwantitthatway) => {
            setGenre(iwantitthatway.target.value);
            if (!iwantitthatway.target.value) {
              setGenreError("Please select a genre!");
            }
          }}
        >
          <option value="">Select a genre!</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Indie">Indie</option>
        </select>
        <p className="text-red-500 text-xs h-4">{genreError}</p>
        <h4>Artist Name</h4>
        <input 
          type="text"
          value={artist}
          onChange={(iwantitthatway) => {
            setArtist(iwantitthatway.target.value);
            if (!iwantitthatway.target.value) {
              setArtistError("Please enter an artist name!");
            }
          }}
          placeholder="Enter an artist name!"
        />
        <p className="text-red-500 text-xs h-4">{artistError}</p>
        <h4>Rating / BPM</h4>
        <input 
          type="number"
          min="1"
          max="100"
          value={rating}
          onChange={(iwantitthatway) => {
            setRating(iwantitthatway.target.value)
            if (!iwantitthatway.target.value) {
              setRatingError("Please enter a valid rating!");
            } else if (iwantitthatway.target.value < 1 || iwantitthatway.target.value > 100) {
              setRatingError("Rating / BPM must be between 1 and 100!");
            }
          }}
          placeholder="Enter a rating between 1-100!"
        />
        <p className="text-red-500 text-xs h-4">{ratingError}</p>
        <h4>Record Label Name</h4>
        <input 
          type="text"
          value={label}
          onChange={(iwantitthatway) => {
            setLabel(iwantitthatway.target.value);
            if (!iwantitthatway.target.value) {
              setLabelError("Please enter a record label name!");
            }
          }}
          placeholder="Enter a record label name!"
        />
        <p className="text-red-500 text-xs h-4">{labelError}</p>
        <h4>User Role</h4>
        <div>
          <input 
            type="radio"
            name="role"
            value="Creator"
            checked={role === "Creator"}
            onChange={(iwantitthatway) => {
              setRole(iwantitthatway.target.value);
              setRoleError("");
            }}
          />
          <h4>"Creator"</h4>
          <input
            type="radio"
            name="role"
            value="Listener"
            checked={role === "Listener"}
            onChange={(iwantitthatway) => {
              setRole(iwantitthatway.target.value);
              setRoleError("");
            }}
          />
          <h4>"Listener"</h4>
        </div>
        <p className="text-red-500 text-xs h-4">{roleError}</p>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4">ADD TRACK</button>
      </form>
    </div>
  )
}