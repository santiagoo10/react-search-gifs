import React, {useEffect, useState  } from "react";
import Gif from "../../components/Gif";
import getGifs from "../../services/getGifs";

export default function SearchResults({params}){
    const {keyword} = params 
    const [gifs,setGifs] = useState([])

    useEffect(function () {
      console.log("ListOfGifs useEffect...", Date.now())
      getGifs({ keyword } )
        .then(gifs => setGifs(gifs))
    },[keyword])
    
    return gifs.map(({id,title,url}) => 
            <Gif 
                id={id}
                key={id}
                title={title}
                url={url} 
            />
        )
}