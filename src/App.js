import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{song_title: 'tests', album: 'test album', artist: 'Guinea Pig', genre: 'Test music', release_date: '9/20/2022'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries}/>
      <AddEntryForm />

    </div>
  );
}

export default App;
