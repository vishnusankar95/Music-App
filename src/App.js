import {useState, useEffect} from 'react';
import { Switch } from "react-router";
import { Route } from "react-router-dom";

import Player from './components/Player/Player';
import Navbar from './components/Navbar/Navbar';
import Chapterone from './components/Log/Chapterone';
import Artistlog from './components/Artist/Artistlog';


function App() {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <div>
      
      <Switch>
      <Route path="/" exact>
         <Chapterone/>
        </Route>

        <Route path="/artistlog" exact>
         <Artistlog/>
        </Route>

        <Route path="/player">
          {" "}
         <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
        </Route>


      </Switch>

       {/* <Navbar/> */}
       {/* <Chapterone/> */}
       {/* <Artistlog/> */}
      </div>
      
    </div>
  );
}

export default App;
