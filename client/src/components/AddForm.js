import React, { Component } from 'react';


export class AddForm extends Component {
    
    state = {
        title: '',
        urgent: false
    }

   newTitle = "New Task"
   loaded = false;
   componentWillMount(){
       this.loaded = true;
   }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title, this.state.urgent);
        this.setState({title: ''})
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    urgent = (e) => this.setState(({urgent}) => ({
        urgent: !urgent
    }));
    


   
    render() {
        if(this.loaded){
            this.props.updateNav(this.newTitle)  
           } 
        return (
            <React.Fragment>
                <h3>Add new task:</h3>
              <div className="form-container">
                  <form onSubmit = {this.onSubmit}>
                      {/* Add task */}
                      <div>
                          <label htmlFor="title" className="block">Task:</label>
                          <input className="task form-control no-focus" name="title" type="text" value={this.state.title}  onChange={this.onChange} />
                      </div>
                      {/* Add category */}
                      {/* <div>
                          <label htmlFor="category" className="block">Select category:</label>
                          <select className="form-control no-focus category" name="categories">
                          {this.props.categories.map((category) => (
                                <option key={category.id} category={category}>{category.categoryTitle}</option>
                             ))}
                          </select>
                      </div> */}
                      <div className="start">
                          <label className="no-mg" htmlFor="urgent">Is it urgent?
                          <br />
                              <small>(don't check if not)</small>
                          </label>
                          <input type="checkbox" name="urgent" className="urgent" onChange={this.urgent} value={this.state.urgent} />
                      </div>
                      <div>
                          <button className="form-control no-focus btn" type="submit">Add task</button>
                      </div>
                  </form>
              </div>
           </React.Fragment>
        )
    }
}

export default AddForm
