import React from 'react';
class NumberForm extends React.Component {
    render() {
        return (
            <div className="container align-items-center">
            <button className="btn btn-primary w-100" onClick={this.props.onAddClick}>
                Add Number
            </button>
            </div>
        );
    }
}

export default NumberForm;
