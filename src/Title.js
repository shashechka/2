import React from 'react';
import './App.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state={text: this.props.text}
    }
    render () {
        return <label>{this.state.text}</label>
    }
}


export default Title;