// 父组件通过参数的形式向子组件传递参数
// 子组件通过props的形式接受参数

import React, { Component } from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handerDelite = this.handerDelite.bind(this);

    };

    handerDelite() {
        // 父组件传递给子组件的方法
        const { delite, index } = this.props;
        delite(index)
    }

    render() {
        const { val } = this.props;
        return (
            <div onClick={this.handerDelite}>
                {val}
            </div>
        )
    }
}

export default TodoItem;