import React from 'react';
import Pic from './Pic.js';
import Title from './Title.js';
import './App.css';

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state = { listofarticles: [{id: 0, pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Caloptilia_negundella_%281_of_1%29.jpg/330px-Caloptilia_negundella_%281_of_1%29.jpg', text: '_00_'} , 
                                        {id: 1, pic: 'https://upload.wikimedia.org/wikipedia/en/9/9c/There_For_Me.jpg', text: '_01_'},
                                        {id: 2, pic: 'https://upload.wikimedia.org/wikipedia/en/6/67/Bones-s5-dvd.jpg', text: '_02_'}],
                       listofids: [0, 1, 2]
                  }
            //listofdos: [{id: 1, text: 'yyy', checked: false}, {id: 2, text: 'uu', checked: true}], counter: 2 };
        
    }
    render() {
        return (
        <>
            {this.state.listofarticles.map (item => (<Pic pic={item.pic}></Pic>) )}
            <div></div>
         
            {this.state.listofarticles.map (item => (<Title text={item.text}></Title>) )}
            <div></div>
            {this.state.listofids.map (item=><label>{item}</label>)}
            <div></div>
            {this.state.listofids.map (item=>(<><label>{item}</label><Title text={this.state.listofarticles[item].text}></Title></>) )}
            <div></div>
            <label>{this.state.listofarticles[1].id}</label>
            <label>{this.state.listofarticles[1].text}</label>
         </>   
        );
    }
    componentDidMount() {
        this.setState({listofids: this.state.listofids.sort(() => Math.random() - 0.5)});
    }
}

export default Board