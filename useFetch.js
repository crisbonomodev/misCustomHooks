import {useState, useEffect,useRef}  from 'react'

export const useFetch = (url) => {
//Vamos a usar useRef para validar si un componente esta renderizado o no.
const isMounted = useRef(true)

const [state, setstate] = useState({data: null, loading: true, error: null});

useEffect(()=> {
    //Usamos este useEffect para que cuando el componente se oculte, no se haga el fetch
    return() => {
        isMounted.current = false;
    }
},[])

useEffect(() => {
    setstate({data: null, loading: true, error: null});
    
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        if(isMounted.current){

            setstate({
                loading: false,
                error: null,
                data
            })
        }
    });
}, [url])

return state;

}
