import React, { Component } from 'react'
import Tabbar from './../componet/Tabbar'
class Home extends Component {
    render() {
        return (
            <div>
                <img className='bg-img' src={require('../static/images/home.png').default}></img>
            </div>
        )
    }
}

export default Tabbar(Home)