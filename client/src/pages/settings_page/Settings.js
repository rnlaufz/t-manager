import React, { Component } from 'react'


export class Settings extends Component {

    constructor(props){
        super(props)
        this.state = {
            navTitle: "Settings"
        }
    
      
    }
    componentDidMount(){
        this.props.updateNav(this.state.navTitle)
    }
    render() {
        return (
            <React.Fragment>
                        {this.props.children}
            </React.Fragment>
        )
    }
}

export default Settings
