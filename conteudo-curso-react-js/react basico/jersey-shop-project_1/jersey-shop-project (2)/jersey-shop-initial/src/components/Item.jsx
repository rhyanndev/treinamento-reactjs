function Item({item, selectProduct, changeQuantity}) {

    return (

        <>
                    {/*Utilizando redenreização condicional para os produtos que estarão com o selected
                    // Se "isInBag" for true, o produto ficará "selecionado*/}
                    
                    <div onClick={()=>selectProduct(item.id)} className={`product ${item.isInBag ? 'selected' :''}`}>
                        <div className="photo">
                            <img src={"./img/" + item.photo} />
                        </div>
                        <div className="description">
                            <span className="name">{item.name}</span>
                            <span className="price">{item.price}</span>

                            {
                                //Redenrização condicional com o operador "AND"
                                item.isInBag && 
                            <div className="quantity-area">
                                <button disabled={item.quantity <= 1} onClick={(e) => changeQuantity(e, item.id, -1)}>-</button>
                                <span className="quantity">{item.quantity}</span>
                                <button onClick={(e) => changeQuantity(e, item.id, +1)}>+</button>
                            </div>
                            }

                        </div>
                    </div>

        </>

    )


}

export default Item;