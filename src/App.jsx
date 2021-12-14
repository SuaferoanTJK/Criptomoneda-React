import React, {useState,useEffect} from 'react';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';
import ImagenCripto from './img/imagen-criptos.png';

const Contenedor = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 1024px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  display: block;
  margin: 50px auto 0 auto;
  @media (min-width: 1024px){
    margin: 100px auto 0 auto;  
  }
`;
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  font-size: 34px;
  margin: 50px auto;
  @media (min-width: 1024px){
    margin-top: 100px;
    margin-bottom: 50px;
  }
  &::after{
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const [monedas,setMonedas] = useState({});
  const [cotizacion,setCotizacion] = useState({});
  const [spinner,setSpinner] = useState(false);

  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      setSpinner(true);
      setCotizacion({});

      const cotizarCripto = async() => {
        const {moneda,criptomoneda} = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCotizacion(resultado.DISPLAY[criptomoneda][moneda]);
        setSpinner(false);
      }
      cotizarCripto();
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt="Imagen Criptomonedas"
      />
      <div>
        <Heading>Cotizar criptomonedas al instante</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
        {spinner && <Spinner/>}
        {cotizacion.PRICE &&
          <Cotizacion
            cotizacion={cotizacion}
          />
        }
      </div>
    </Contenedor>
  )
}

export default App;