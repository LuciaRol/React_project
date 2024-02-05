import { useState } from 'react'

function Calculadora() {
    const [display, setDisplay] = useState('0');
    const [numeroActual, setNumeroActual] = useState('');
    const [numeroAnterior, setNumeroAnterior] = useState('');
    const [operador, setOperador] = useState('');
  
    const manejarClickNumero = (num) => {
      if (display === '0') {
        setDisplay(num.toString());
      } else {
        setDisplay(display + num.toString());
      }
      setNumeroActual(numeroActual + num.toString());
    };
  
    const manejarClickOperador = (op) => {
      if (numeroActual !== '') {
        if (numeroAnterior !== '') {
          manejarIgual();
        }
        setNumeroAnterior(numeroActual);
        setNumeroActual('');
        setOperador(op);
        setDisplay(''); // Aquí se borra el número de la pantalla
      }
    };
  
    const manejarIgual = () => {
      let resultado;
      switch (operador) {
        case '+':
          resultado = parseFloat(numeroAnterior) + parseFloat(numeroActual);
          break;
        case '-':
          resultado = parseFloat(numeroAnterior) - parseFloat(numeroActual);
          break;
        case '*':
          resultado = parseFloat(numeroAnterior) * parseFloat(numeroActual);
          break;
        case '/':
          resultado = parseFloat(numeroAnterior) / parseFloat(numeroActual);
          break;
        default:
          return;
      }
      setDisplay(resultado.toString());
      setNumeroAnterior(resultado.toString());
      setNumeroActual('');
      setOperador('');
    };
  
    const manejarLimpiar = () => {
      setDisplay('0');
      setNumeroActual('');
      setNumeroAnterior('');
      setOperador('');
    };


    
    const generarBotonesNumericos = () => {
    const botones = [];
    for (let i = 0; i <= 9; i++) {
      botones.push(
        <button key={i} onClick={() => manejarClickNumero(i)}>{i}</button>
      );
    }
    return botones;
  };

    /*
    
    function trataClick(e){
        // como en js plano, esta es la forma de que solo salga en pantalla en item clicado
        setTitulo ("Has clicado en " + e.target.innerHTML)
        console.log(titulo);
    }

    */

    /* let titulo = "Cargando contenido de titulo"; */
    /*let nombres=['lu', 'nerdo', 'sam', 'pablo'];
    let lista = nombres.map(nombre =>
            <li key={nombre}>{nombre}</li>
        )
    */

    return (
        <div className="calculadora">
            <div className="display">{display}</div>
            <div className="botones">
            {generarBotonesNumericos()}
            <button onClick={() => manejarIgual()}>=</button>
            <button onClick={() => manejarClickOperador('+')}>+</button>
            <button onClick={() => manejarClickOperador('-')}>-</button>
            <button onClick={() => manejarClickOperador('*')}>*</button>
            <button onClick={() => manejarClickOperador('/')}>/</button>
            <button onClick={() => manejarLimpiar()}>C</button>
            </div>
        </div>
        );

}

export default Calculadora