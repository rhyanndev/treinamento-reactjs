import './App.css'

/* 
Exercício 1:

Teste Suas Habilidades com Renderização de Listas
Use o array de filmes para gerar uma tabela HTML com a lista de filmes.

O cabeçalho da tabela já está feito, basta aplicar a renderização da lista na linha dentro do elemento <tbody>.
*/

// Não mude o nome do componente "App"
export default function App() {

    // Não altere o conteúdo do array de filmes
    const movies = [
        {
            //Criado um ID para ser o key attribute
            id: 1,
            title: 'The Shawshank Redemption',
            year: 1994,
            rating: 4.7
        },
        {
            id: 2,
            title: 'The Godfather',
            year: 1972,
            rating: 4.5
        },
        {
            id: 3,
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
            rating: 4.4
        },
        {
            id: 4,
            title: 'The Matrix',
            year: 1999,
            rating: 4.4
        },
    ];

    return (

        <>
            <table>

                {/* Este é o heading da tabela, não é preciso fazer nada aqui */}
                <thead>
                    <tr key={m.id}>
                        <th>Movie</th>
                        <th>Year</th>
                        <th>Rating</th>
                    </tr>
                </thead>

                {movies.map(m =>
                (<tbody>

                    {/* Mostre cada filme abaixo desta linha */}
                    {/* Cada filme deve estar dentro do seu próprio elemento <tr> */}

                    <tr key={m.id}>
                        <td>{m.title}</td>
                        <td>{m.year}</td>
                        <td>{m.rating}</td>
                    </tr>

                    {/*Fim da renderização da lista */}

                </tbody>)
                )}
            </table>
        </>

    )
}