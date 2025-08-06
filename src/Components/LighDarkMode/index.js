import { Component  } from "react";

import './index.css'

class LightDarkMode extends Component{
    state = {
        isDarkLighMode : false
    }
    onChangeMode = () =>{
        this.setState((prevState)=>({
            isDarkLighMode:!prevState.isDarkLighMode
        }),console.log("Work is Done"))
    }
   
    render(){
        const {isDarkLighMode} = this.state
        const modeClassName = isDarkLighMode ? 'dark-mode' : 'light-mode'
        const buttonText =  isDarkLighMode ? 'light-mode' : 'dark-mode'
        return(
            <div className="app-container">
               <div className={`container ${modeClassName}`}>
                <h1 className="mode-container">
                    Click to Change Mode
                </h1>
                <button className="button" type="button" onClick={this.onChangeMode}>{buttonText}</button>
                </div>
            </div>
        )
    }
}
export default LightDarkMode