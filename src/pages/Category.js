
import React, { Component } from 'react'
import Tabbar from './../componet/Tabbar'
 class Category extends Component {
    render() {
        return (
            <div>
                <img className='bg-img' src={require('../static/images/category.png').default}></img>

            </div>
        )
    }
}
export default Tabbar(Category)