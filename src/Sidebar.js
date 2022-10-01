import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useStateValue } from './StateProvider';


function Sidebar() {
  const [{playlists}, dispatch] = useStateValue()
  return (
    <div className='sidebar'>
      <img className='sidebar_logo' src='https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2020/04/spotify-logo-1920x1080-2.jpg' alt=''/>
        <SidebarOption Icon={HomeOutlinedIcon} option ="Home"/>
        <SidebarOption Icon={SearchOutlinedIcon} option ="Search"/>
        <SidebarOption Icon={LibraryMusicOutlinedIcon} option ="Your Library"/>
        
        <strong className='sidebar_title'>PLAYLISTS</strong>
        <hr/>

        {playlists?.items?.map((playlist)=>(
           <SidebarOption option={playlist.name} />
        ))}

    </div>
  )
}

export default Sidebar
