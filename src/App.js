import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomeContainer from './containers/HomeContainer'

import './App.css';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {

  renderCustomerContainer = () => <h1>Customer Container</h1>
  
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  renderCustomerEditContainer = () => <h1>Customer Edit Container</h1>

  renderCustomerDelContainer = () => <h1>Customer Del Container</h1>

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ HomeContainer } />
          <Route exact path="/customers" component={ CustomersContainer } />
          <Switch>
            <Route path="/customers/new" render={ this.renderCustomerNewContainer } />
            <Route path="/customers/:dni/edit" render={ this.renderCustomerEditContainer } /> 
            <Route path="/customers/:dni/del" render={ this.renderCustomerDelContainer } /> 
            <Route path="/customers/:dni" render={ this.renderCustomerContainer } /> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
