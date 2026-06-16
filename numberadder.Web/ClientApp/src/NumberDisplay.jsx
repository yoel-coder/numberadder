import React from 'react';



class NumberDisplay extends React.Component {
//     onSelectClick = ()=>{
// this.props.onSelectClick(this.props.number)
    
        
    


render() {
    const {number,isSelected,islocked} = this.props
    return ( <tr><td>{number}</td><button className='btn btn-primary' disabled={islocked}
    onClick={this.props.onSelectClick}>{isSelected ? 'Unselect' : 'Select'}</button></tr>)

}
    

}
export default NumberDisplay;