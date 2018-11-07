import React from 'react';

function InfoText(props) {
  return (
    <div {...props}>
      {props.children}
    </div>
  );
}

export default InfoText;