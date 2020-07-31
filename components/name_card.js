'use strict';

const e = React.createElement;

class NameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You clicked the temp component';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Temp Component'
    );
  }
}

const domContainer = document.querySelector('#temp');
ReactDOM.render(e(NameCard), domContainer);