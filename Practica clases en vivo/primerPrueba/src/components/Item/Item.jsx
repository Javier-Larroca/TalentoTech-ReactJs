export const Item = ({item, children}) => {
    return (
        <article>
            <h2>{item.nombre}</h2>
            <p>Precio: ${item.precio}</p>
            <p>Decripción: {item.descripcion}</p>
            {children}
        </article>
    );
}