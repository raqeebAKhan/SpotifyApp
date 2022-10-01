import React from 'react'
import "./Center.css"
import Header from './Header'
import { useStateValue } from './StateProvider'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Center({spotify}) {
  const [{ discover_weekly }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    spotify.play({
        context_uri: `spotify:playlist:6ehdSiG3d2TinBXr1r7ZK0`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify.play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className='center'>
     <Header spotify= {spotify}/>
     
     <div className='center_info'>
      <img src={discover_weekly?.images[0].url} alt=''/>

      <div className='center_infoText'>
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>
        <p>{discover_weekly?.description}</p>
      </div>
     </div>
     <div className='center_songs'>
      <div className='center_icons'>
        <PlayCircleIcon className='center_shuffle'  onClick={playPlaylist}/>
        <FavoriteIcon fontSize='large'/>
        <MoreHorizIcon/>
      </div>

      {discover_weekly?.tracks.items.map((item)=> {
        <SongRow playSong={playSong} track= {item.track}/>
      })}
     </div>

    </div>
  )
}

export default Center
