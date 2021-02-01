import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickCounterChild extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, this.props)
        return  !(nextProps.counter === this.props.counter)
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                {this.props.counter}
                <button onClick={this.props.reset}>Reset the counter</button>
            </div>
        );
    }
}

ClickCounterChild.propTypes = {

};

export default ClickCounterChild;