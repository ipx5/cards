import React from "react";
import { withRouter } from "react-router-dom";
import ProfileImage from "./ProfileImage";
import InfoText from "./InfoText";
import Skill from "./Skill";

class Card extends React.Component {
  state = {
    show: true
  };

  toggleShow = () => this.setState({show: !this.state.show});
  clickHandler = () => this.props.history.push({ pathname: `/user/${this.props.card.id}` });
  
  render() {
    let { show } = this.state;
    return (
      <div
        className="card-container list"
        onClick={this.clickHandler}
        onMouseEnter={this.toggleShow}
        onMouseLeave={this.toggleShow}
      >
        <ProfileImage />
        <InfoText className="user-name text-bold">
          {this.props.card.name}
        </InfoText>
        <InfoText className="user-age">{this.props.card.age} years</InfoText>
        { show ? 
          <InfoText className="user-skills">
            {getSkills(this.props.card.knowledge).map(el => el)}
          </InfoText> :
          this.props.card.knowledge.map((item, idx) => (
              <Skill key={idx} skill={item} className="card-skill-detail-small"/>
          ))
        }
      </div>
    );
  }
}

function getSkills(knowledge) {
  return knowledge.map((item, idx) => {
    return knowledge.length === idx + 1 ? (
      <span key={idx}>{item.language}</span>
    ) : (
      <span key={idx}>{item.language},</span>
    );
  });
}

export default withRouter(Card);
