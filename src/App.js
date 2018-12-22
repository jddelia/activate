import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Intro from './components/Intro';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Comments from './data/Comments';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      comments: [...Comments]
    };
    this.handleSwitchUser = this.handleSwitchUser.bind(this);
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/')
    .then(res => {
      this.setState({
        user: res.data.results
      });
    });
  }

  handleSwitchUser(user) {
    this.setState({
      user: user
    });
  }

  render() {
    let comment = this.state.comments[Math.floor(Math.random() * this.state.comments.length)]

    return (
      <div className="">
        <Navbar />
        <Header />
        <Intro
          onClick={this.handleSwitchUser}
          comment={comment}
          user={this.state.user}/>
        <Features />
        <Pricing />
        <Footer />
      </div>
    );
  }
}

export default App;
