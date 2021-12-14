import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    color: #FFF;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 10px;
`;
const Imagen = styled.img`
    display: block;
    width: 120px;
`;
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`;
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`;

function Cotizacion({cotizacion}) {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = cotizacion;
    console.log(cotizacion);
    return (
        <Contenedor>
            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="Imagen Criptomoneda"
            />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto es de: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo es de: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Cotizacion;