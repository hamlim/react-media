import React, { Component } from 'react';

export default MatchMedia;

class MatchMedia extends Component {
  constructor(props) {
    super(props);
		this.handleMQLChange = this.handleMQLChange.bind(this);

    this.mql = window !== undefined ?
      ('matchMedia' in window ?
        window.matchMedia(props.media) :
        null
      ) :
      null;

    this.state = {
			matches: true
		};
  }

  handleMQLChange(mql) {
    if (mql) {
      this.setState({matches: mql.matches});
    } else {
			this.setState({matches: true});
    }
  }
	
	componentDidMount() {
		this.mql.addListener(this.handleMQLChange);

    this.handleMQLChange();
	}

  componentWillUnmount() {
    this.mql.removeListener(handleMGLChange);
  }

  render() {
    return this.props.children(this.state.matches)
  }
}