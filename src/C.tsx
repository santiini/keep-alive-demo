import React from 'react';
import { bindLifecycle } from 'react-keep-alive';

@bindLifecycle
class C extends React.Component {
  state = {
    value: false,
  };

  componentWillMount() {
    console.log('C componentWillMount');
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: true,
      });
    }, 1000);
    console.log('C componentDidMount');
  }

  componentDidActivate() {
    console.log('C componentDidActivate');
  }

  componentWillUpdate() {
    console.log('C componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('C componentDidUpdate');
  }

  componentWillUnactivate() {
    console.log('C componentWillUnactivate');
  }

  componentWillUnmount() {
    console.log('C componentWillUnmount');
  }

  render() {
    console.log('C render');
    return (
      <div>
        {this.state.value ? <div>This is c.</div> : null}
      </div>
    );
  }
}

export default C;