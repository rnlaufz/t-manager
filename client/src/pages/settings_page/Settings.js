import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {setNavTitle} from '../../actions/navTitle';



 const Settings = (props) => {
     useEffect(()=> {
        props.setNavTitle("Settings");  
     })
    return (
        <React.Fragment>
           {props.children} 
        </React.Fragment>
    )
}

Settings.propTypes = {
    setNavTitle: propTypes.func.isRequired
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title
})

export default connect(mapStateToProps, {setNavTitle})(Settings)

