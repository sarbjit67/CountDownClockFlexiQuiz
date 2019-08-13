import React from 'react';
import './App.css';

class CountDownClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'currtime': this.props.s }
  }
  componentDidMount() {
    this.counter = setInterval(() => this.timer(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.counter);
  }
  timer() {
    let t = this.state.currtime;
    this.setState({ 'currtime': t - 1 });
  }
  render() {
    const curr = this.props.format(this.state.currtime);
    return (
      <p>{curr}</p>
    );

  }


}

class App extends React.Component {
  format(seconds) {
    let date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  }
  render() {
    return (
      <div className="App">
        <CountDownClock s={1000} format={this.format} />

      </div>

    );
  }

}

export default App;
