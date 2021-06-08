import React,{Component,Fragment} from 'react';
import TodoItem from "./TodoItem.js";
class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                'learn js',
                'learn vue',
                'learn react',
            ],
            val: '',

        };

        // 优化代码性能
        this.changeInput = this.changeInput.bind(this);
        this.addList = this.addList.bind(this);
        this.handerDelite = this.handerDelite.bind(this)

    };

    // 增加
    addList() {
        this.setState({
            list: [...this.state.list, this.state.val],
            val: '',

        })
    };
    // 输入框的变化
    changeInput(e) {
        this.setState({
            val: e.target.value
        })

    };
    // 删除
    deliteItem(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        })
    };
    // 子组件调用夫组件的方法
    handerDelite(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        })

    };
    // 把复杂繁琐部分的jsx放到一个方法来
    geTodoList() {
        return (
            this.state.list.map((item, index) => {
                return (
                    <TodoItem
                        delite={this.handerDelite}
                        index={index}
                        key={index}
                        val={item} />
                )
            })
        )
    };
    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.val} onChange={this.changeInput}></input>
                    <button onClick={this.addList}>add</button>
                </div>
                <ul>
                    {this.geTodoList()} 
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;