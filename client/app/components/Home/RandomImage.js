import React, { Component } from 'react';

class RandomImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "https://i.pinimg.com/originals/d1/5d/ac/d15dacd6c84ae79c8c71019942cee7d9.jpg"
        }

        this.randomImageGenerator = this.randomImageGenerator.bind(this);
    }

    randomImageGenerator() {
        fetch("http://aws.random.cat/meow")
        .then(res => res.json())
        .then(res => this.setState({url: res.file}))
    }

    render() {
        return (
            <div className="dog-content"> 
                <img className="dog-image" src={this.state.url}></img>
                <button className="user-button" onClick={this.randomImageGenerator}>Click me!</button>
            </div>
        )
    }
}

export default RandomImage;

