import React from 'react';
import './styles/Footer.css';

// CARA LAMA

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p className='footer-text'>My Footer</p>
        <p>{this.props.message}</p>
      </footer>
    )
  }
}

export default Footer;