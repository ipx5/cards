import React, { Component } from "react";
import Skill from "./Skill";
import CardExtended from "./CardExtended";
import { getCardById } from '../actions';

class CardDetail extends Component {
  state = {
    card: null
  };
  componentDidMount() {
    const userId = this.props.match.params && this.props.match.params.id;
    getCardById(userId)
      .then(resp => {
        if (resp.data.id) {
          this.setState({ card: resp.data, id: resp.data.id });
        } else {
          this.props.history.push({ pathname: "/" });
        }
      })
      .catch(e => console.log(e.message));
  }
  clickHandler = () => this.props.history.push({pathname: '/'});

  render() {
    return (
      this.state.card && (
        <div className="card-detail-container">
          <div className="back-button" onClick={this.clickHandler}>
            <span className="arrow"></span>
            <span className="text-bold">Back</span>
          </div>
          <div className="card-detail-item">
            <CardExtended card={this.state.card} />
            <hr />
            {this.state.card.knowledge.map((item, idx) => (
              <Skill key={idx} className="card-skill-detail hover" skill={item} />
            ))}
          </div>
        </div>
      )
    );
  }
}

export default CardDetail;
