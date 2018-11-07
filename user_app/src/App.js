import React, { Component } from 'react';
import Card from './components/Card';
import { getCards } from './actions';

class App extends Component {
  state = {
    cards: []
  }
  componentDidMount() {
    getCards()
      .then(resp => this.setState({cards: resp.data}))
      .catch(e => console.log(e.message));
  }
  render() {
    return (
      <div className="container">
        {this.state.cards.map((card) => 
          <Card
            key={card.id} 
            card={card} 
          />
        )}
      </div>
    );
  }
}

export default App;
