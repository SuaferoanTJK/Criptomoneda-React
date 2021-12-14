import{j as x,n as c,r as d,R as F,a as C}from"./vendor.a7043da4.js";const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}};w();const e=x.exports.jsx,n=x.exports.jsxs,y=x.exports.Fragment,E=c.label`
    color: #FFF;
    display: block;
    font-family: "Lato", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`,N=c.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`;function v(s,r){const[i,a]=d.exports.useState("");return[()=>n(y,{children:[e(E,{children:s}),n(N,{value:i,onChange:t=>a(t.target.value),children:[e("option",{value:"",children:"-- Seleccionar --"}),r.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})]}),i]}const I=[{id:"COP",nombre:"Peso Colombiano"},{id:"MXN",nombre:"Peso Mexicano"},{id:"USD",nombre:"Dolar"},{id:"EUR",nombre:"Euro"},{id:"GBP",nombre:"Libra Esterlina"}],A=c.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    text-align: center;
`;function P({children:s}){return e(A,{children:s})}const L=c.input`
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
`;function z({setMonedas:s}){const[r,i]=d.exports.useState([]),[a,o]=d.exports.useState(!1),[t,l]=v("Seleccionar moneda",I),[m,p]=v("Seleccionar criptomoneda",r),f=h=>{if(h.preventDefault(),[l,p].includes("")){console.log("Ambos campos deben estar llenos"),o(!0);return}console.log("Enviando formulario"),o(!1),s({moneda:l,criptomoneda:p})};return d.exports.useEffect(()=>{(async()=>{const b=await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"),S=(await b.json(b)).Data.map(k=>({id:k.CoinInfo.Name,nombre:k.CoinInfo.FullName}));i(S)})()},[]),n(y,{children:[a&&e(P,{children:"Todos los campos son obligatorios"}),n("form",{onSubmit:f,children:[e(t,{}),e(m,{}),e(L,{type:"submit",value:"Cotizar"})]})]})}const j=c.div`
    color: #FFF;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 10px;
`,D=c.img`
    display: block;
    width: 120px;
`,M=c.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`,u=c.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`;function R({cotizacion:s}){const{PRICE:r,HIGHDAY:i,LOWDAY:a,CHANGEPCT24HOUR:o,IMAGEURL:t,LASTUPDATE:l}=s;return console.log(s),n(j,{children:[e(D,{src:`https://cryptocompare.com/${t}`,alt:"Imagen Criptomoneda"}),n("div",{children:[n(M,{children:["El precio es de: ",e("span",{children:r})]}),n(u,{children:["Precio m\xE1s alto es de: ",e("span",{children:i})]}),n(u,{children:["Precio m\xE1s bajo es de: ",e("span",{children:a})]}),n(u,{children:["Variaci\xF3n \xFAltimas 24 horas: ",e("span",{children:o})]}),n(u,{children:["\xDAltima actualizaci\xF3n: ",e("span",{children:l})]})]})]})}function O(){return n("div",{className:"sk-circle",children:[e("div",{className:"sk-circle1 sk-child"}),e("div",{className:"sk-circle2 sk-child"}),e("div",{className:"sk-circle3 sk-child"}),e("div",{className:"sk-circle4 sk-child"}),e("div",{className:"sk-circle5 sk-child"}),e("div",{className:"sk-circle6 sk-child"}),e("div",{className:"sk-circle7 sk-child"}),e("div",{className:"sk-circle8 sk-child"}),e("div",{className:"sk-circle9 sk-child"}),e("div",{className:"sk-circle10 sk-child"}),e("div",{className:"sk-circle11 sk-child"}),e("div",{className:"sk-circle12 sk-child"})]})}var $="/Criptomoneda-React/assets/imagen-criptos.c0430b0f.png";const T=c.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 1024px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`,U=c.img`
  max-width: 400px;
  width: 80%;
  display: block;
  margin: 50px auto 0 auto;
  @media (min-width: 1024px){
    margin: 100px auto 0 auto;  
  }
`,H=c.h1`
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
`;function G(){const[s,r]=d.exports.useState({}),[i,a]=d.exports.useState({}),[o,t]=d.exports.useState(!1);return d.exports.useEffect(()=>{Object.keys(s).length>0&&(t(!0),a({}),(async()=>{const{moneda:m,criptomoneda:p}=s,f=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${p}&tsyms=${m}`,g=await(await fetch(f)).json();a(g.DISPLAY[p][m]),t(!1)})())},[s]),n(T,{children:[e(U,{src:$,alt:"Imagen Criptomonedas"}),n("div",{children:[e(H,{children:"Cotizar criptomonedas al instante"}),e(z,{setMonedas:r}),o&&e(O,{}),i.PRICE&&e(R,{cotizacion:i})]})]})}F.render(e(C.StrictMode,{children:e(G,{})}),document.getElementById("root"));
