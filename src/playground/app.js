class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this); //this is the right and efficient solution as it is not bound at every each render
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount() { //runs only if new instances of IndecisionApp was mounted
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all - empty array is returned
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) { //if length is equal no save is done
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data'); //runs only if props or state is updated
        }
    }

    componentWillUnmount(){
        console.log('componentWillUmount'); //runs only if the whole page renders
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option //it gives back falseif item is in Array and remove the item
            )
        }))
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
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    render() {
        const subTitle = 'Put your life in hands of a computer';

        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}


/* title={title} subTitle={subTitle} === this.props */
/* options={options} === this.props */

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
};

Header.defaultProps = { // it passes default property to the Header and not needed to add any value up there
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions} //if it is false the button is disabled
            >
                What should I do
                </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            {/*<button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>  handleRemoveAll method must be bound to 'this' explicitly in order to use this.props on this method -> expensive solution */}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                /* this.props.options.map(option => <p key={option}>{option}</p>) */
                props.options.map(option => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption} />
                )) //rendering a new instances of Option and have access to data via optionText(it can be named anything)
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText} {/* retrieving the data */}
            <button 
            onClick= {(e) => {props.handleDeleteOption(props.optionText)}}>
            Remove
            </button>
        </div>
    );
};

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
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
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
