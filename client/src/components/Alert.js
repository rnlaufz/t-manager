import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; 

const Alert = ({alerts}) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div key={alert.id} /* @TO_DO add styling */ >
        {alert.messg}
    </div>
));

Alert.propTypes = {
    alerts: PropTypes.array.required
}

const mapStateToProps = (state) => ({
    alerts: state.alert
})
export default connect(mapStateToProps)(Alert);

