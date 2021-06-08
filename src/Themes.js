import React, { Component } from "react";
import ThemesContext from "./ThemesContext";
class Themes extends Component {
    render() {
        return (
            <ThemesContext.Consumer>
                {
                    theme => {
                        return(
                            <div style={{ color: theme.color, background: theme.bgcolor }}>hello,world</div>
                        )
                    }
                }
            </ThemesContext.Consumer>
        )
    }
}

export default Themes;