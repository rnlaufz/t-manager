import React, { Component } from 'react'

export class SettingsUserData extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="form-container">
                    <form>
                <h3>User data</h3>
                <div>
                  <label htmlFor="u-f-name" className="block">Change First Name:</label>
                  <input id="u-f-name" name="u-f-name" type="text" className="form-control no-focus" placeholder="First Name" />
              </div>
              <div>
                  <label htmlFor="u-l-name" className="block">Change Last Name:</label>
                  <input id="u-l-name" name="u-l-name" type="text" className="form-control no-focus" placeholder="New email" />
              </div>
              <div>
                  <label htmlFor="u-email" className="block">Change email:
                      <br />
                      <span>(you'll have to confirm new email)</span>
                  </label>
                  <input id="u-email" name="u-email" type="text" className="form-control no-focus" placeholder="New email" />
              </div>
              <div>
                  <label htmlFor="u-password" className="block">Change password:</label>
                  <input id="u-password" name="u-password" type="password" className="form-control no-focus" placeholder="New password" />
              </div>
              <div>
                  <label htmlFor="u-password-confirm" className="block">Confirm new password:</label>
                  <input id="u-password-confirm" name="u-password-confirm" type="password" className="form-control no-focus" placeholder="New confirm new password" />
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

export default SettingsUserData
