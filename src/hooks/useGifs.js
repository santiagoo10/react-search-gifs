import {useEffect, useState, useContext} from "react"   
import getGifs from "../services/getGifs"
import GifsContext from '../context/GifsContext'

export function useGifs ({ keyword }){
    
    const [loading, setLoading] = useState(false)
    
    //const [gifs,setGifs] = useState([]) 
    //TODO: en lugar de usar state local 
    //utilizo context para probar los context y tengo la info disponible 
    //para evitar ir tanto al server

    //seteo en el context global
    const {gifs,setGifs} = useContext(GifsContext)

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
