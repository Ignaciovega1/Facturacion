import React from 'react';

class ButtonSelector extends React.Component {
  handleButtonClick = (id) => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    const selectedButton = document.getElementById(id);
    selectedButton.classList.add('selected');
  }

  render() {
    return null;
  }
}

export default ButtonSelector;