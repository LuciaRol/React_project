function Comp(){
    function trataClick(){
        console.log("Has clicado en el boton")
    }

    let titulo = "Cargando contenido de titulo";
    let nombres=['lu', 'paco', 'sam', 'pablo'];
    let lista = nombres.map(nombre =>
            <li key={nombre}>{nombre}</li>
        )

  
    return(
    <>
        <h1>Primer componente</h1>
        <h2>{titulo}</h2>

        <button onClick={trataClick}>Hazme click</button>
        <ul>
            {lista}
        </ul>
     
        </>
    );

}

export default Comp