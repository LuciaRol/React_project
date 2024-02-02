function Comp(){
    function trataClick(){
        console.log("Has clicado en el boton")
    }

    function listaClick(e){
        // como en js plano, esta es la forma de que solo salga en pantalla en item clicado
        console.log("Has clicado en " + e.target.innerHTML)
    }

    let titulo = "Cargando contenido de titulo";
    let nombres=['lu', 'nerdo', 'sam', 'pablo'];
    let lista = nombres.map(nombre =>
            <li key={nombre}>{nombre}</li>
        )

  
    return(
    <>
        <h1>Primer componente</h1>
        <h2>{titulo}</h2>

        <button onClick={trataClick}>Hazme click</button>
        <ul onClick={listaClick}>
            {lista}
        </ul>
     
        </>
    );

}

export default Comp