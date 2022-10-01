import React from "react";
import {useEffect, useState} from 'react';
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  const [{ user }, dispatch] = useStateValue();
  const [token, setToken] = useState("");
  const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "68cb209664ee4b679f0b8eb723da9925";

const scopes = [
    "user-read-playback-position",
    "user-read-email",
    "user-library-modify",
    "playlist-modify-public",
    "ugc-image-upload",
    "user-follow-modify",
    "user-modify-playback-state",
    "user-read-recently-played",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "playlist-modify-private",
    "user-follow-read",
    "user-read-playback-state",
    "user-read-currently-playing",
    "playlist-read-private",
    "playlist-read-collaborative",
];

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("6ehdSiG3d2TinBXr1r7ZK0")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("6ehdSiG3d2TinBXr1r7ZK0", token)
    }

    setToken(token)

}, [])

const logout = () => {
  setToken("")
  window.localStorage.removeItem("6ehdSiG3d2TinBXr1r7ZK0")
}


  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon/>
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
     
        <Avatar onClick={logout} src={user?.images[0]?.url} alt={user?.display_name}/>
        
        <h4>
          {user?.display_name}
        </h4>

        <button><a href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>Logout</a></button>
  
      </div>
    </div>
  );
}

export default Header;
