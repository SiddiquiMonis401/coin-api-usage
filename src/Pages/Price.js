import React,{useState,useEffect} from 'react'
import PriceHeader from '../Components/PriceHeader'
import PriceList from '../Components/PriceList'
import { AiOutlineLoading,AiOutlineLoading3Quarters
} from 'react-icons/ai'        
function Price(props) {
    const [coinData,setCoinData]=useState({});
    const [loading,setLoading]=useState(true);
    useEffect(async () => {
        const response=await fetch("https://coinranking1.p.rapidapi.com/coins", {
            "method": "GET",
                 "headers": {
                     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                     "x-rapidapi-key": "09a17cf02emsh03f4cc72d195da9p1bcce0jsncad1c821224c"
                    }
                });
        const data= await response.json();
        const result=data;
        setCoinData(result.data)
        setLoading(false)
    },[]) 
    if(!loading){
        console.log(coinData.coins)
    }
    return (
        <>
            <PriceHeader />
            
        {
            loading ?<> <AiOutlineLoading3Quarters
            className="loading-logo" /><h1 style={{textAlign:'center'}}>Loading</h1></>:
            <PriceList coinsData={coinData.coins}/>
        }
        
        </>
    );
}

export default Price;

