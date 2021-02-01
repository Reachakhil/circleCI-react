import React from 'react';
import ClickCounterChild from './ClickCounterChild'
class ClickCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter:0,
            arr:[1,2,3,4,4,5,3,1,3,4,5]
        }
    }
    handleClick = () =>{     //if we need to access this as global (for state) inside this func make it as
        //arrow func, else bind it. 
        this.setState(prevState=>{
          return  {counter: prevState.counter + 1}
        })
    }
     reset = ()=>{
        console.log(this,"clicked");
        this.setState({counter:0})
    }
    
   
  

    render() {
       let Mapped =  this.state.arr.map((child,key)=>{
            return( <div key={key} style={{color:'white'}}>{child} - {key}</div>
                )
            })
        return(
            <div>
            <button onClick={this.handleClick}>CLicked  times</button>
            <ClickCounterChild counter={this.state.counter} reset={this.reset}/>
            <br/>
           
           
            {/* {} */}
        {Mapped}
            
            
            </div>
        )
    }
}

export default ClickCounter