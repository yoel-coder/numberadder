import React from 'react';
import NumberForm from './NumberForm'
import NumberDisplay from './NumberDisplay'
import {v4 as uuid4} from "uuid";
import SelectedNumbersDisplay from './SelectedNumbersDisplay';
class NumberLister extends React.Component {
state = {
    numbers: [],
  currentnumber:{number: Math.floor(Math.random() * 100),id:uuid4()},
  selectedNumbers:[],
  lockedNumbers:[],
  

  };
onLockClick=(n)=>{
const lockedNumbers= [...this.state.lockedNumbers]
const islocked=lockedNumbers.some(snumber=>snumber.id==n.id)
if(islocked){
  this.setState({lockedNumbers:lockedNumbers.filter(item=>item.id!==n.id)})
}
else{
const lockedNumbers = [...this.state.lockedNumbers,(n)]
this.setState({lockedNumbers:lockedNumbers})
}
}
onaddClick = e=>{
    this.setState({ currentnumber:{number: Math.floor(Math.random() * 1000),id:uuid4()}})
const copy = [...this.state.numbers, this.state.currentnumber];
this.setState({ numbers: copy })
}
onSelectClick=(n)=> {
  
  const selectedNumbers = [...this.state.selectedNumbers]
  const exisits = selectedNumbers.some(snumber=>snumber.id==n.id)
  if(exisits){
    
    this.setState({selectedNumbers:selectedNumbers.filter(item=>item.id!==n.id)})
  }
  else
  {
selectedNumbers.push(n)
this.setState({selectedNumbers:selectedNumbers});
  }



}

render() {

    return (
  
    <div className="container">
      <NumberForm onAddClick={this.onaddClick} /> 
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Numbers</th>
            <th>ADD/REMOVE</th>
          </tr>

        </thead>
        <tbody>
          {this.state.numbers.map((n)=> <NumberDisplay
            key={n.id} number={n.number}
            onSelectClick={()=>this.onSelectClick(n)}
           isSelected = {this.state.selectedNumbers.some(snumber=>snumber.id==n.id)}
           islocked = {this.state.lockedNumbers.some(lnumber=>lnumber.id==n.id)}
            />
          )}

    </tbody>
  
    </table>

 <div className="row p-5 rounded" style={{backgroundcolor:" rgb(233, 236, 239)"}}>
  <div className="col-md-6 col-md-offset-3"><h3>{!!this.state.selectedNumbers.length && "Selected Numbers"} </h3>
  <ul className="list-group">

    {this.state.selectedNumbers.map((n)=> <SelectedNumbersDisplay
    key= {n.id} number = {n.number}
    onLockClick = {()=>this.onLockClick(n)}
    islocked={this.state.lockedNumbers.some(snumber=>snumber.id==n.id)}
  />
  )}
  
  </ul>
  </div></div>

 


  </div>




    )
        }
}
export default NumberLister;