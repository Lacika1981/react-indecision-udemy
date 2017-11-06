'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this); //this is the right and efficient solution as it is not bound at every each render
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //runs only if new instances of IndecisionApp was mounted
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // Do nothing at all - empty array is returned
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                //if length is equal no save is done
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
                console.log('saving data'); //runs only if props or state is updated
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUmount'); //runs only if the whole page renders
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    } //it gives back falseif item is in Array and remove the item
                    )
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.includes(option)) {
                return 'This option is already added to the list';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subTitle = 'Put your life in hands of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subTitle: subTitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

/* title={title} subTitle={subTitle} === this.props */
/* options={options} === this.props */

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = { // it passes default property to the Header and not needed to add any value up there
    title: 'Indecision'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions //if it is false the button is disabled
            },
            'What should I do'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),

        /* this.props.options.map(option => <p key={option}>{option}</p>) */
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption });
        }) //rendering a new instances of Option and have access to data via optionText(it can be named anything)

    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        'Option: ',
        props.optionText,
        ' ',
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault(); // prevent page to refresh only
            var option = e.target.elements.option.value.trim(); //the trim() method removes whitespace from both ends of a string
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
