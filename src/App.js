import './App.css';
import Header from './components/Header.js'
import {useState,useEffect} from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
const [punkListData, setPunkListData] =useState([])
const  [selectedPunk, setSelectedPunk] =useState(0)

useEffect(()=>{
   async function getMyNfts(){
    const openseaData=await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_address=0x1437A5e95A7077B8ed4d1a6aD38794F7aF86f45d&order_direction=asc')
    console.log(openseaData.data.assets)
    setPunkListData(openseaData.data.assets)
   }

 getMyNfts();
},[]);


  return (
    <div className="app">
    <Header />  
    {punkListData.length > 0 && (
      <>
        
    <Main punkListData={punkListData} selectedPunk={selectedPunk} />
    <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />   
    
      </>
    )}
    </div>
  );
}

export default App;
