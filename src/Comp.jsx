import { useState } from 'react'

function Comp({ param, param2=0 }){

    const [titulo, setTitulo] = useState('Cargando contenido de titulo');

    function trataClick(e){
        // como en js plano, esta es la forma de que solo salga en pantalla en item clicado
        setTitulo ("Has clicado en " + e.target.innerHTML)
        console.log(titulo);
    }



    /* let titulo = "Cargando contenido de titulo"; */
    let nombres=['lu', 'nerdo', 'sam', 'pablo'];
    let lista = nombres.map(nombre =>
            <li key={nombre}>{nombre}</li>
        )

  
    return(
    <>
        <h1>Primer componente</h1>
        <h2>Recibe como param = {param}</h2>
        <h2>Recibe como param2 = {param2}</h2>

        <button onClick={trataClick}>Hazme click</button>
        <ul onClick={trataClick}>
            {lista}
        </ul>
     
        </>
    );

}

export default Comp