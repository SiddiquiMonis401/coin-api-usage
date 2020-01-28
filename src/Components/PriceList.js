import React, { Component } from 'react'
import { FaCoins } from 'react-icons/fa'
export default class PriceList extends Component {
    constructor(props){
        super(props);
    }
   
    render()
    {
        console.log(this.props.coinsData)
        return (
            <div >
              {
                  this.props.coinsData && this.props.coinsData.map(items=>{
                      return(
                          <div className="price-list-styles">
                          <p>{items.id}</p>
                          <p><FaCoins />{items.name}</p>
                          <p>{parseInt(items.price).toFixed(2)}</p>
                          <p>{items.numberOfExchanges}</p>
                          <p>{items.numberOfMarkets}</p>
                          {items.confirmedSupply && <button className="btn-trade">Trade</button>}
                          </div>
                      )
                  })
              }
                
            </div>
        )
    }
}

