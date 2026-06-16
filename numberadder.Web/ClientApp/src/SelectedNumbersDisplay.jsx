import React from "react";

class SelectedNumbersDisplay extends React.Component {

    render() {
        const { number,islocked } = this.props;
        return (
            <li className="list-group-item">{number}<button className="ms-5 btn btn-primary"
             onClick={this.props.onLockClick}>{islocked ? 'Unlock' : 'lock'}
           </button></li>
        );
    }





}
export default SelectedNumbersDisplay