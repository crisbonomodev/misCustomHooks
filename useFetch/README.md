#useFetch hook

```
import React from 'react'
import './hooks.css';
import {useFetch} from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
export const MultipleCustomHooks = () => {

    const {counter,increment} = useCounter(1);
    const {loading,data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

    const {quote, author,series} = !!data && data[0];

    return (
        <div>
            <h1>BreakingBadQuotes</h1>
        {loading?
            (
            <div className="alert alert-info text-center">
                Loading...
            </div>

            )
            :
            (
            <blockquote className="blockquote text-right">
                <p className="mb-0">{quote}</p>
                <footer className="blockquote-footer">{author} - {series}</footer>
            </blockquote>

            )
        }
            <button className="btn btn-primary " onClick={increment}>Siguiente</button>
        </div>
    )
}

```