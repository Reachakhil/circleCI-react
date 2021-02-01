import React from 'react';

class HoverCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter:0
        }
    }
    handleClick = () =>{
        this.setState(prevState=>{
          return  {counter: prevState.counter + 1}
        })
    }

    render() {

        return(
            <div>
            <p onMouseOver={this.handleClick}>CLicked {this.state.counter} times</p>
            </div>
        )
    }
}

export default HoverCounter