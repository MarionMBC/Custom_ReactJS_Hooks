import { useEffect, useState, useRef } from "react";


export const useFetch = (url, options  = {
    method: 'GET',
}) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });


    useEffect(() => {
        return () => {
            isMounted.current = false
        }

    }, [])


    useEffect(() => {
        setState({
            loading: true,
            error: null,
            data: null
        })

        fetch(url, options)
            .then(res => res.json())
            .then(data => {

                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }
                else { console.log("El componente se ha desmontado.") }

            })

    }, [url])

    return state;
}