// 高阶组件
import './A.css'
import { Component } from "react";

function a(Params) {
    return class A extends Component{
        render(){
            return(
                <div className='container'>
                    <Params></Params>
                </div>
            )
        }
    }
}

export default a;