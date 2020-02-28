import React, { Component } from 'react';
import Memes from './memes'

class Home extends Component {
  render() {
    return (
        <Memes memes={this.state.memes} />
    )
}

state = {
    memes: []
};

componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then((data) => {
            this.setState({ memes: data.data.memes })
        })
        .catch(console.log)
}
}

export default Home;