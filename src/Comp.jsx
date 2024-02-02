function Comp(){
    let titulo = "Cargando contenido de titulo";
    let contenido;
    let valor=true;

    /* esto es preparar la vista */
    if (valor)
        titulo = <h2>Entro en if</h2>
    else
        titulo = <>Entro en false<div>un div</div><p>seguido de un p</p></>
    return(
    <>
        <h1>Primer componente</h1>
        <h2>{titulo}</h2>
        {contenido}

        {
            valor ? <h1>Valor es true</h1> : <h1>Valor es false</h1>
        }
    </>
    );

}

export default Comp