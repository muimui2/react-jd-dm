import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Category from './pages/Category'
import User from './pages/User'

export default class RouterMap extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/cart' component={Cart}></Route>
                    <Route path='/category' component={Category}></Route>
                    <Route path='/user' component={User}></Route>
                </Switch>
            </BrowserRouter>
        )
    }

}
