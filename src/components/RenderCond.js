
// existe a maneira de usar como parametro de entrada apenas a variavel props, caso seja props
// cada propriedade teria que ser chamada usando o props para buscada ex: props.x
// mas tbm tem como setar a propriedade ja direto ex: trocando props por {x} e caso tenha mais propriedades sendo passada pelo component pai, seria: {x, y}
function RenderCond(props)
{

    return (
        <div>
            {/*modelo comum de realizar uma condicao*/}
            {props.x >= 5 && <p>é maior ou igual a 5</p>}
            {/*modelo ternario*/}
            {props.x >= 5 ? <p>é maior que 5 Ternario</p> : <p>Nao e maior que 5 Ternario</p>}
        </div>
    );
}

export default RenderCond;