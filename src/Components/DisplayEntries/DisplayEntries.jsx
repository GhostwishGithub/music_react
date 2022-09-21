
const DisplayEntries = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Song Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry, index) =>{
            return (
              <tr>
                <td>{index+1}</td>
                <td>{entry.song_title}</td>
                <td>{entry.album}</td>
                <td>{entry.artist}</td>
                <td>{entry.genre}</td>
                <td>{entry.release_date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;