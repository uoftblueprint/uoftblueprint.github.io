"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NameCard = function (_React$Component) {
    _inherits(NameCard, _React$Component);

    function NameCard(props) {
        _classCallCheck(this, NameCard);

        var _this = _possibleConstructorReturn(this, (NameCard.__proto__ || Object.getPrototypeOf(NameCard)).call(this, props));

        _this.state = { hover: false };
        _this.styles = {
            div: {
                width: 300,
                height: 450,
                backgroundColor: "#0078E8"
            }
        };
        return _this;
    }

    _createClass(NameCard, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            if (this.state.hover) {
                this.styles.div = {
                    width: 300,
                    height: 450,
                    backgroundColor: "#E4F1FF"
                };
                return React.createElement(
                    "div",
                    {
                        style: this.styles.div,
                        onMouseEnter: function onMouseEnter() {
                            return _this2.setState({ hover: true });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this2.setState({ hover: false });
                        }
                    },
                    this.props.msg
                );
            }

            if (!this.state.hover) {
                this.styles.div = {
                    width: 300,
                    height: 450,
                    backgroundColor: "#0078E8"
                };
                return React.createElement(
                    "div",
                    {
                        style: this.styles.div,
                        onMouseEnter: function onMouseEnter() {
                            return _this2.setState({ hover: true });
                        },
                        onMouseLeave: function onMouseLeave() {
                            return _this2.setState({ hover: false });
                        }
                    },
                    this.props.msg
                );
            }

            return React.createElement(
                "div",
                null,
                "Empty div"
            )

            //   <button onMouseEnter={() => this.setState({ liked: true })}>
            //     This is the like button
            //   </button>
            ;
        }
    }]);

    return NameCard;
}(React.Component);

var domContainer = document.querySelector("#name_card");
ReactDOM.render(React.createElement(NameCard, domContainer.dataset), domContainer);