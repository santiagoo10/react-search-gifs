import {useEffect, useState} from "react"   
import getGifs from "../services/getGifs"

export function useGifs ({ keyword }){
    const [loading, setLoading] = useState(false)
    const [gifs,setGifs] = useState([])
    
    useEffect(function () {
        setLoading(true)
        console.log("hook ...", Date.now())
        getGifs({ keyword } )
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    },[keyword])//se ejecuta cada vez que keyword se actualiza

    return {loading, gifs}
}
