import './App.css';
import OrderDetails from './components/OrderDetails';
import Item from './components/Item';
import { useState } from 'react';

// Function component
function App() {

    const [items, setItems] = useState(
    [
        {
            id: 1,
            photo: "real_madrid.webp",
            name: "Real Madrid",
            price: 119.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 2,
            photo: "milan.png",
            name: "Milan",
            price: 99.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 3,
            photo: "chelsea.webp",
            name: "Chelsea",
            price: 99.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 4,
            photo: "barcelona.png",
            name: "Barcelona",
            price: 109.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 5, photo: "benfica.png",
            name: "Benfica",
            price: 89.49,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 6,
            photo: "manchester.webp",
            name: "Manchester City",
            price: 129.79,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 7,
            photo: "bayern.webp",
            name: "Bayern",
            price: 119.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 8,
            photo: "psg.png",
            name: "PSG",
            price: 94.99,
            active: false,
            quantity: 1,
            isInBag: false
        },
        {
            id: 9,
            photo: "ajax.webp",
            name: "Ajax",
            price: 89.99,
            active: false,
            quantity: 1,
            isInBag: false
        }
    ]);

    // Verificando quais items estão com valor true para serem adicionados
    const itemsInBag = items.filter(item => item.isInBag);

    function selectHandler(id){

        //Chamar o item pelo o id que foi passado
        let item = items.filter(item => item.id === id)[0];

        //Mudando o valor do isInbag (adicionando ou removendo o produto do pedido)
        item.isInBag = !item.isInBag;

        //Colocando de volta no array de objetos

        setItems(items.map(elemento => elemento.id === id ? item : elemento));
    }

     //Passando o evento, id do produto e o valor a ser incrementado
     function quantityHandler(e, id, increment){
        e.stopPropagation();

         let item = items.filter(item => item.id === id)[0];
         item.quantity += increment;
         //Definir novamente o valor da variável items, substituindo o item, pelo item.quantity
         //Se não, vai repetir para todos os outros
         setItems(items.map(elemento => elemento.id === id ? item : elemento));
    }


    //Parte visível da aplicação sempre estará dentro do return
    return (
        //Os elementos JSX precisam estar dento de um único elemento raiz "<>", um fragment, 
        //"elemento HTML vazio sem nome"
        <>
            <section className="items">
                <h4>Jersey Shop Made with React JS</h4>

                {items.map(item =>

                    <Item
                        selectProduct = {(id) => selectHandler(id)}
                        changeQuantity={(e, id, increment) => quantityHandler(e, id, increment)}
                        item={item}
                        key={item.id}
                    />
                 ) }

            </section>

            {/*De acordo com a documentação, é sempre bom o retorno ser true ou false, ao invés de 0, pois o retorno aparece visualmente*/}
            {itemsInBag.length > 0 && <OrderDetails itemsInBag={itemsInBag}/>}

        </>
    );
}

export default App
//Exportando a função para ser usado em outro arquivo