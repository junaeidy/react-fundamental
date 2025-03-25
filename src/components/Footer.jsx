import React from 'react';
import './styles/Footer.css';
import { Button } from '@heroui/react';
import { withBackground } from '../hoc/withBackground';

// CARA LAMA

class Footer extends React.Component {
  state = {
    message: 'Hello React'
  }

  // componentDidMount() {
  //   alert('Footer component mounted');
  // }

  // componentDidUpdate() {
  //   alert('Footer component updated');
  // }

  // changeMessage = () => {
  //   this.setState({ message: 'Hello React' });
  // }

  // componentWillUnmount() {
  //   alert('Footer component unmounted');
  // }

  render() {
    return (
      <footer>
        <p className='footer-text'>My Footer</p>
        <p data-testid="props-message">{this.props.message}</p>
        <p>{this.props.propsTambahan}</p>
        <p data-testid="state-message">{this.state.message}</p>
        <Button data-testid="button-footer" onClick={this.changeMessage}>Change Message</Button>
      </footer>
    )
  }
}

export default withBackground(Footer);