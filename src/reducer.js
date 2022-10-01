import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    spotify: null,
    playlists: [],
    discover_weekly: null,
    top_artists: null,
    playing: false, 
    item: null,
    
    // token: 'BQBM9gvodC58q5ZT7qzljwpOobdhqByZ9TMHei17ilwur4uukje75dndNNTC-TfgQXvlLBVMQMEw0LhFsPaf46RzJkUfM6DuTT3aGwHGhE99ISeshMcTG-8DWcNga4hPp5rokkGv3_kAuRIcrFBijQkgPo8FqpU3s7XoC_YyXfBUkufnZfAieAZDzUePERaVNL5ksqvF0Dx3NbCDou0t',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            };

            case "SET_PLAYING":
                return {
                ...state,
                playing: action.playing,
             };

             case "SET_ITEM":
                return {
                  ...state,
                  item: action.item,
                };

            case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

      case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
          

            case "SET_TOKEN":
                return{
                    ...state,
                    token: action.token,
                }

                case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };


                case "SET_PLAYLISTS":
                    return{
                        ...state,
                        playlists: action.playlists,
                    }

                  
                   

            default: 
            return state;
    }

}

export default reducer;