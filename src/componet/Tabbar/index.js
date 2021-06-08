import React, { Component } from 'react'
import './index.css'
import { Link} from "react-router-dom";
const tabarArr = [
    { icon: 'icon-zhuye-copy', name: '主页' ,link:'/home'},
    { icon: 'icon-leimupinleifenleileibie2', name: '分类',link:'category' },
    { icon: 'icon-cart', name: '购物车' ,link:'cart'},
    { icon: 'icon-user_selector_post', name: '用户',link:'user' },
]
const Tabbar = (WillCompoent) => class Tabbar extends Component {
    render() {
        const url=window.location.href;
        return (
            <div>
                <WillCompoent />
                <div className='tabbar-content'>
                    {tabarArr.map((item, index) => (
                        <Link to={item.link} className={'tabar-item ' + (url.indexOf(item.link) > -1 ? 'redcolor' : '')} key={index}>
                            <div className={'tabbar-item-icon iconfont ' + item.icon }></div>
                            <div>{item.name}</div>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default Tabbar;
