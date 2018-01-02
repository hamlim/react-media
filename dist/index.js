import { Component } from 'react';

class MatchMedia extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      matches: true
    }, this.mql = typeof window !== 'undefined' ? 'matchMedia' in window ? window.matchMedia(props.media) : null : null, this.handleMQLChange = mql => {
      if (mql) {
        this.setState({ matches: mql.matches });
      } else {
        this.setState({ matches: true });
      }
    }, _temp;
  }

  componentDidMount() {
    this.mql.addListener(this.handleMQLChange);

    this.handleMQLChange();
  }

  componentWillUnmount() {
    this.mql.removeListener(handleMGLChange);
  }

  render() {
    return this.props.children(this.state.matches);
  }
}

export default MatchMedia;
