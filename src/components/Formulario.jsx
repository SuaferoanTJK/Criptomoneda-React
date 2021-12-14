import React, {useState,useEffect} from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/Monedas';
import Error from './Error';

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;

function Formulario({setMonedas}) {
    const [criptos,setCriptos] = useState([]);
    const [error,setError] = useState(false);

    const [SelectMonedas,moneda] = useSelectMonedas("Seleccionar moneda",monedas);
    const [SelectCriptomonedas,criptomoneda] = useSelectMonedas("Seleccionar criptomoneda",criptos);

    const handleSubmit = e => {
        e.preventDefault();

        if([moneda,criptomoneda].includes("")){
            console.log("Ambos campos deben estar llenos");
            setError(true);
            return;
        }
        console.log("Enviando formulario");
        setError(false);
        setMonedas({moneda,criptomoneda});
    }

    useEffect(() => {
        const consultarAPI = async() => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json(respuesta);

            const arrayCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            })
            setCriptos(arrayCriptos);
        }
        consultarAPI();
    }, [])

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas/>
                <SelectCriptomonedas/>
                <InputSubmit
                    type="submit"
                    value="Cotizar"
                />
            </form>
        </>
    )
}

export default Formulario;