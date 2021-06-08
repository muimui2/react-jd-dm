import React, { Component } from 'react'
import Tabbar from './../componet/Tabbar'
class User extends Component {
    render() {
        return (
            <div>
                <img className='bg-img' src={require('../static/images/user.png').default}></img>

            </div>
        )
    }
}
export default Tabbar(User)