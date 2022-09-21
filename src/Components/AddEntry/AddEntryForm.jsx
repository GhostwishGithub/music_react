import React, { useState } from 'react';


const AddEntryForm = () => {

    const [song_title, setTitle] = useState('');
    const [album, setAlbum] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setReleaseDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            song_title: song_title,
            album: album,
            artist: artist,
            genre: genre,
            release_date: release_date, 
        }
        console.log(newEntry);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Song Title</label>
            <input type='text' value={song_title} onChange={(event) => setTitle(event.target.value)}/>
            <label>Album</label>
            <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Artist</label>
            <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Genre</label>
            <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <label>Date Released</label>
            <input type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
     );
}
 
export default AddEntryForm;