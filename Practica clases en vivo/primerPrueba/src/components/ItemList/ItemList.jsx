import { Item } from "../Item/Item"

export const ItemList = ({lista}) => {
    return (
        <>
            {lista.length ? (
                lista.map((prod) => (<Item key={prod.id} item={prod} children={<button>Boton</button>}/>))
            ) : (
                <p>No hay produtos disponibles.</p>
            )}
        </>
    );
};