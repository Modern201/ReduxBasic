import React, { Component, PropTypes } from 'react';
const propTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomColor: PropTypes.func
};

function createWarning(funcName){
  return () => console.warn('[DEBUG] '+funcName + ' is not defined');
}



const defaultProps = {
  onPlus: createWarning('onPlus'),
  onSubtract: createWarning('onSubtract'),
  onRandomColor: createWarning('onRandomColor')
};
class Control extends Component {

    render() {
        return(
            <div>
              <button onClick={this.props.onPlus}>+</button>
              <button onClick={this.props.onSubtract}>-</button>
              <button onClick={this.props.onRandomColor}>Random Color</button>
            </div>
        );
    }
}
Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
export default Control;
