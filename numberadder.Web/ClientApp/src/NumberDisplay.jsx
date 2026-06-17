import React from 'react';



class NumberDisplay extends React.Component {


    
        
    


render() {
    const {number,isSelected,islocked} = this.props
    return ( <tr><td>{number}</td><button className={islocked? ' btn btn-danger':'btn btn-primary'} disabled={islocked}
    onClick={this.props.onSelectClick}>{isSelected ? 'Unselect' : 'Select'}</button></tr>)

}
    

}
export default NumberDisplay;