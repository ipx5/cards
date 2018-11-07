import React from 'react';
import InfoText from './InfoText';

function Skill({skill, className}) {
  return (
    <div className={className}>
      <InfoText className="text-bold">
        {skill.language}
      </InfoText>
      <InfoText>{getSkills(skill.frameworks)}</InfoText>
    </div>
  );
}

function getSkills(framework) {
  return framework.map(item => item).join(' - ');
  }
export default Skill;