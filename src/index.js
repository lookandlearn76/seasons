import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// ---Functional component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );
//
//   return <div>Hi there!</div>;
// };
//---------------------------

//-------Class based component------
class App extends React.Component {
  //constructor is the first thing called in the component and is automatically called with props
  constructor(props){
    //super is a reference to the parents constructor function to make sure that we get everything that comes with React.component
    super(props);
    this.state= { lat: null, errorMessage: ''};
  }
//the above code can be refactored to be just
// state={ lat: null, errorMessage: ''}; without the constructor and super
// this is because the babel transpiler will create the constructor and super for us if we don't do it.
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude}),
        //never ever do a this.state.lat!! as you would in regular javascript -
        //the only exception to that is when you initialize state in super
      err => this.setState({errorMessage: err.message})
    );
  }

  componentDidUpdate(){
    console.log('My component was just updated - it re-rendered');
  }
  //React says we have to define render()!!!
  //never use the render method to do anything but render!
  render() {
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if(!this.state.errorMessage && this.state.lat){
      return<SeasonDisplay lat={this.state.lat} />;
    }
    return<div>Loading!</div>
      //if you put a ; after the div you will get an error because you can't use them on multi-line returns

  }
}

ReactDOM.render(
  <App/>, document.querySelector('#root')
);
