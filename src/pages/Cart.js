import React, { Component } from 'react'
import Tabbar from './../componet/Tabbar'
class Cart extends Component {
    render() {
        return (
            <div>
                <img className='bg-img' src={require('../static/images/cart.png').default}></img>

            </div>
        )
    }
}

export default Tabbar(Cart)