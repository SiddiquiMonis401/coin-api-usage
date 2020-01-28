import React,{useState} from 'react';
import { IoIosSearch }  from 'react-icons/io'
function Header(props) {
    //declerations
    const timeArray=['24h','1w','1h','1m'];
    const asset=['All Assets','Tradeable Assets','Top Gainers','Top loosers'];
    const [time,setTime]=useState("24h");
    const [assets,setAssets]=useState("All Assets");
    const [search,setSearch]=useState("");
    //functions for the options
    const getAssets=asset.map(items=>{
        return(
            <option value={items}>
               {items}
            </option>
        )
    }); 
    // functions
    const getTime=timeArray.map(items=>{
        return(
            <option value={items}>
               {items}
            </option>
        )
    });

    return (
        <header className="header-styles">
            <div className="header-text">
            <p style={{color:'grey'}}>In the last 24 hours</p>
            <p>Market is down <span style={{color:'tomato'}}>24</span></p>
            </div>
            <div className="search-container">
            <IoIosSearch />
            <input type="text" name="search-box" id="search" value={search} placeholder="search here" onChange={e=>{setSearch(e.target.value)}}/>
            </div>
            <div>
            <select className="select-time" value={time} onChange={(e)=>{setTime(e.target.value)}}>
                {getTime}
            </select>
            <select className="select-assets" value={assets} onChange={(e)=>{setAssets(e.target.value)}}>
                {getAssets}
            </select>
            </div>   
        </header>
    );
}

export default Header;