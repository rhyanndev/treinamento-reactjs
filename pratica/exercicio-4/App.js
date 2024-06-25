import './App.css'
import { counterReducer } from './countReducer';
import React from 'react';

// Encapsular a lógica do state em uma função reducer.

// Não altere o nome do componente "App"
export default function App() {

    // useReducer é criado assim porque este exercício não suporta a importação direta
    const useReducer = React.useReducer;

    const [count, dispatch] = useReducer(counterReducer, 0);


    return (

        <>

            <div className="container">

                <h2>Counter App</h2>
                <p className="counter">{count}</p>

                <div className="buttons">
                    <button onClick={() => { dispatch({ type: 'incremented' }) }} className="incremented">
                        Adicionar
                    </button>
                    <button onClick={() => { dispatch({ type: 'decremented' }) }} className="decremented">
                        Diminuir
                    </button>
                    <button onClick={() => { dispatch({ type: 'reset' }) }} className="reset">
                        Zerar
                    </button>
                </div>
            </div>

        </>

    )
}