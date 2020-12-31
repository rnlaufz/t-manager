import React, { Component } from 'react'
import { connect } from 'react-redux';
import {setNavTitle} from '../actions/navTitle';

export class EditForm extends Component {


    state = {
        taskTitle: 'Task',
        urgent: false
    }

    componentDidMount(){
        this.props.setNavTitle("Edit");
     }

    render() {
        return (
            <React.Fragment>
                <h3>Edit Task</h3>
                <div className="form-container">
                    <form >
                        <div>
                            <label htmlFor="task" className="block">Task:</label>
                            <input id="task" name="task" type="text" className="task form-control no-focus"  />
                        </div>
                        <div className="start">
                            <label className="no-mg" htmlFor="urgent">Is it urgent?
                                <br />
                                <small>(don't check if not)</small>
                            </label>
                            <input type="checkbox" name="urgent" id="urgent" />
                        </div>
                        <div>
                            <button className="form-control no-focus btn" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
             </React.Fragment>   
        )
    }
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title
})


export default connect(mapStateToProps, {setNavTitle})(EditForm)
