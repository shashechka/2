import React from 'react';
import './App.css';

class Pic extends React.Component {
    constructor(props) {
        super(props);
        this.state={pic: this.props.pic}
    }
    render () {
        return <img src={this.state.pic}></img>
    }
}


export default Pic;