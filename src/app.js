class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeAllOption = this.removeAllOption.bind(this);// this is the right and efficient solution as it is not bound at every each render
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    removeAllOption() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        }
        else if (this.state.options.includes(option)) {
            return 'This option is already added to the list'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in hands of a computer';

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    removeAllOption={this.removeAllOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

/* title={title} subTitle={subTitle} === this.props */
/* options={options} === this.props */

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions} //if it is false the button is disabled
                >
                    What should I do
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/*<button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>  handleRemoveAll method must be bound to 'this' explicitly in order to use this.props on this method -> expensive solution */}
                <button onClick={this.props.removeAllOption}>Remove All</button>
                {
                    /* this.props.options.map(option => <p key={option}>{option}</p>) */
                    this.props.options.map(option => <Option key={option} optionText={option} />) //rendering a new instances of Option and have access to data via optionText(it can be named anything)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText} {/* retrieving the data */}
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault(); // prevent page to refresh only
        const option = e.target.elements.option.value.trim(); //the trim() method removes whitespace from both ends of a string
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error
            };
        });
    }

    
    render() { 
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
