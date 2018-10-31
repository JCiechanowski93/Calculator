import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../sass/style.scss';
import Button from "./Components/button.jsx";
import Input from "./Components/input.jsx";
import ClearButton from "./Components/clearButton.jsx";
import * as math from "mathjs";






class App extends Component {
    state = {
        input: ""
    }

    addToInput = val => {
        this.setState({ input: this.state.input + val });
    };

    handleEqual = () => {
        this.setState({ input: math.eval(this.state.input) })
    }

    render() {
        return (<div>
            <div className="calc-wrapper">
                <Input input={this.state.input}></Input>
                <div className="row">
                    <Button handleClick={this.addToInput}>7</Button>
                    <Button handleClick={this.addToInput}>8</Button>
                    <Button handleClick={this.addToInput}>9</Button>
                    <Button handleClick={this.addToInput}>/</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.addToInput}>4</Button>
                    <Button handleClick={this.addToInput}>5</Button>
                    <Button handleClick={this.addToInput}>6</Button>
                    <Button handleClick={this.addToInput}>*</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.addToInput}>1</Button>
                    <Button handleClick={this.addToInput}>2</Button>
                    <Button handleClick={this.addToInput}>3</Button>
                    <Button handleClick={this.addToInput}>+</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.addToInput}>.</Button>
                    <Button handleClick={this.addToInput}>0</Button>
                    <Button handleClick={() => this.handleEqual()}>=</Button>
                    <Button handleClick={this.addToInput}>-</Button>
                </div>
                <div className="row">
                    <ClearButton handleClear={() => this.setState({ input: "" })}>Clear</ClearButton>
                </div>
            </div>
        </div>);
    }
}




document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});