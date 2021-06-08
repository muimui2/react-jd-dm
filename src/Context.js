
import React, { Component } from "react";
import ThemesContext from "./ThemesContext";
import Themes from './Themes';
const themes = {
    light: {
        bgcolor: '#fff',
        color: '#000'
    },
    dark: {
        bgcolor: '#000',
        color: '#fff',
    }
}
class Context extends Component {
    constructor(props) {
        super(props)
        this.state = {
            themes: 'light'
        };
        this.changeThemes = this.changeThemes.bind(this);
    }
    changeThemes(themes){
        this.setState({
            themes
        })
    };


    render() {
        return (
            <ThemesContext.Provider value={themes[this.state.themes]}>
                <button onClick={() => { this.changeThemes('light') }}>浅色</button>
                <button onClick={() => { this.changeThemes('dark') }}>深色</button>
                <Themes />
            </ThemesContext.Provider>
        )
    }
}
export default Context;