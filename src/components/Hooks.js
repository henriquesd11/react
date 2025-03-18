import { useState, useEffect } from "react";

function Hooks() {
    let idade: number = 30;
    const [novaIdade, setNovaIdade] = useState(40);

    function changeAge()
    {
        idade = 31;
    }

    function changeNewAge()
    {
        setNovaIdade(novaIdade + 1)
    }

    // exemplo de useEffect, geralmente usado para algo que deve ser executado ao renderizar a pagina, exemplo buscar dados de API.
    useEffect(() => {
        console.log('Testando useEffect')
    })
    return (
        <div>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeAge}>Mudar Idade</button>
            <button onClick={changeNewAge}>Change new Age</button>
        </div>
    );
}

export default Hooks;