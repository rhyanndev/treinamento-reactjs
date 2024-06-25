import './App.css';
import React from 'react';

/* 
Exercício 3

Teste Suas Habilidades com Eventos e o Hook useState
Neste exercício, a sua aplicação deverá realizar as seguintes ações:

- Quando o usuário pressionar o botão "enviar", você deverá exibir o nome completo dentro do elemento <span> reservado para isso.

- O nome completo deve ser formado pelo nome + espaço em branco (" ") + sobrenome.
*/


// Não altere o nome do componente "App"
export default function App() {

    // useState é criado assim porque este exercício não suporta importação direta

    const useState = React.useState;

    const [fullName, setFullName] = useState("");

    // Escreva a sua lógica dentro desta função
    function handleName(e) {
        e.preventDefault();

        const firstName = document.querySelector("input[name=firstName]").value;

        const lastName = document.querySelector("input[name=lastName]").value;

        if (firstName.length && lastName.length) {

            setFullName(firstName + " " + lastName);

        }
        else {
            alert("Informe nome e sobrenome!");
        }

    }

    return (

        <>
            <div className="result">
                <h1>O nome completo é:</h1>
                {/* Mostre o nome completo dentro do <span> abaixo*/}
                <span className="fullname">{fullName}</span>
            </div>

            <form>
                <label htmlFor="firstName">Nome</label>
                <input name="firstName" />
                <label htmlFor="lastName">Sobrenome</label>
                <input name="lastName" />
                <button onClick={(e) => { handleName(e) }}>
                    Enviar
                </button>
            </form>

        </>

    )
}