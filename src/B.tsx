import React from 'react';
import {withRouter} from 'react-router-dom';
import { bindLifecycle } from 'react-keep-alive';

@bindLifecycle
class B extends React.Component<any, any> {
  ref: any;
  componentWillMount() {
    console.log('B componentWillMount');
  }

  componentDidMount() {
    console.log(this.ref.offsetWidth);
    console.log('B componentDidMount');
  }

  componentDidActivate() {
    console.log('B componentDidActivate');
  }

  componentWillUpdate() {
    console.log('B componentWillUpdate');
  }

  componentDidUpdate() {
    console.log(this.ref.offsetWidth);
    console.log('B componentDidUpdate');
  }

  componentWillUnactivate() {
    console.log('B componentWillUnactivate');
  }

  componentWillUnmount() {
    console.log('B componentWillUnmount');
  }

  render() {
    console.log(this);
    console.log('B render');
    return (
      <div ref={ref => this.ref = ref}>This is b.</div>
    );
  }
}

export default withRouter(B);