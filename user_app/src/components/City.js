import React, { Component } from 'react';
import { updateCardById } from '../actions';

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
      value: '',
      city: props.card.city || "City doesn't set."
    }
  }
  updateCityInfo = () => {
    const {card} = this.props;
    if (this.state.value.length) {   
      updateCardById(card.id, {...card, city: this.state.value})
        .then(resp => {
          this.setState({city: resp.data.city, value: ''})
        })
        .catch(e => console.log(e.message));
    }
    this.setState({showText: !this.state.showText});
  }

  handeClick = () => this.setState({showText: !this.state.showText});
  handleChange = (e) => this.setState({value: e.target.value});
  
  handleSubmit = () => {
    this.updateCityInfo();
  }
  render() {
    return (
      this.state.showText ? 
        <div 
          onClick={this.handeClick} 
          className="card-city-detail hover">
          {this.state.city}
        </div> :
        <div className="city-form">
          <span>Country: </span>
          <input 
            value={this.state.value} 
            onChange={this.handleChange} />
          <button 
            onClick={this.handleSubmit}>
            submit
          </button>
      </div>
    )
  }
}

export default City;