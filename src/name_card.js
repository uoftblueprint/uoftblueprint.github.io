"use strict";

class NameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.styles = {
      div: {
        width: 300,
        height: 450,
        backgroundColor: "#0078E8",
      },
    };
  }

  render() {
    if (this.state.hover) {
        this.styles.div = {
          width: 300,
          height: 450,
          backgroundColor: "#E4F1FF",
        };
        return (
            <div
                style={this.styles.div}
                onMouseEnter={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false })}
            >
                {this.props.msg}
            </div>
        );
    }

    if (!this.state.hover) {
        this.styles.div = {
            width: 300,
            height: 450,
            backgroundColor: "#0078E8",
          };
          return (
              <div
                  style={this.styles.div}
                  onMouseEnter={() => this.setState({ hover: true })}
                  onMouseLeave={() => this.setState({ hover: false })}
              >
                  {this.props.msg}
              </div>
          );
    }

    return (
        <div>
            Empty div
        </div>
      

      //   <button onMouseEnter={() => this.setState({ liked: true })}>
      //     This is the like button
      //   </button>
    );
  }
}

let domContainer = document.querySelector("#name_card");
ReactDOM.render(<NameCard {...domContainer.dataset} />, domContainer);
