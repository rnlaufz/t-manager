import React, { Component } from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {setNavTitle} from '../../actions/navTitle';

export class Settings extends Component {

    componentDidMount(){
        this.props.setNavTitle("Settings");
     }
    render() {
        return (
            <React.Fragment>
                        {this.props.children}
            </React.Fragment>
        )
    }
}

Settings.propTypes = {
    setNavTitle: propTypes.func.isRequired
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title
})


export default connect(mapStateToProps, {setNavTitle})(Settings)
