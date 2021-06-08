import { Component } from "react";
import a from "./A";
class B extends Component{
    render(){
        return(
            <h1>我是组件b</h1>
        )
    }
}

export default  a(B)
