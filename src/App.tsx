import axios from 'axios'
import { useState, useEffect } from 'react'
import {createGlobalStyle} from 'styled-components';
import CryptoItemsList from './components/CryptoItemsList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [data, setData] = useState()

  // useEffect(()=>{
  //   const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    
  //   axios.get(API)
  //   .then(resnonse=> setData(resnonse.data))
  //   .catch(error => console.log(error))

  // },[])

  // console.log(data);

  return (
    <div>
      <GlobalStyles darkMode={darkMode}/>
      <Header 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <CryptoItemsList
        darkMode={darkMode}
      />
      <Footer
        darkMode={darkMode}
      />
    </div>
  )
}
export default App;

type GlobaStylesProps = {
  darkMode: boolean
}
const GlobalStyles = createGlobalStyle<GlobaStylesProps>`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
  }
  body{
    background: ${({darkMode})=>darkMode?'#0D0D0D':'#ffffff'};
    color: ${({darkMode})=>darkMode?'#D9D9D9':'#111111'};
  }
`
