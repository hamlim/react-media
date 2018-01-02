import { Component } from 'react'

class MatchMedia extends Component {
  state = {
    matches: true,
  }

  mql = typeof window !== 'undefined' ? ('matchMedia' in window ? window.matchMedia(props.media) : null) : null

  handleMQLChange = mql => {
    if (mql) {
      this.setState({ matches: mql.matches })
    } else {
      this.setState({ matches: true })
    }
  }

  componentDidMount() {
    this.mql.addListener(this.handleMQLChange)

    this.handleMQLChange()
  }

  componentWillUnmount() {
    this.mql.removeListener(handleMGLChange)
  }

  render() {
    return this.props.children(this.state.matches)
  }
}

export default MatchMedia
