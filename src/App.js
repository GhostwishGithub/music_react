import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{song_title: 'tests', album: 'test album', artist: 'Guinea Pig', genre: 'Test music', release_date: '9/20/2022'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries}/>

    </div>
  );
}

export default App;
