import {useState,useEffect} from 'react'

let url;

function Pokemon(){
    const [listaPokemon, setListaPokemon] = useState([]);
   

    function cargarMas(){
        fetch(url)
          .then((response) => response.json())
          .then((datosPokemon) => {
            console.log(datosPokemon)
            url = datosPokemon.next;
            setListaPokemon([...listaPokemon,...datosPokemon.results])
            
          });
    }

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=&&limit=8")
          .then((response) => response.json())
          .then((datosPokemon) => {
            console.log(datosPokemon)
            url = datosPokemon.next;
            setListaPokemon([...listaPokemon,...datosPokemon.results])
            
          });
      }, []);

      let lista = listaPokemon.map(nombre =>
        <li key={nombre.name}>{nombre.name}</li>

      )

    return(
        <>
            <h1>Componente para lista Pokemon</h1>
            <ul>
                {lista}
            </ul>

            <button onClick={cargarMas}>Cargar más</button>
        </>

    )
}
export default Pokemon