import React, { Component } from "react";

// 生命周期
// componentDidMount 创建
// componentDidUpdate 跟新
//componentWillUnmount 卸载
class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }
    
    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState({
                time:new Date()
            })
        },1000)
    };
    // componentDidUpdate(currentval,currentState){
    //     console.log(currentState)

    // };
    componentWillUnmount(){
        clearInterval(this.timer);
    };

    render() {
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        )
    }
}

export default Clock;