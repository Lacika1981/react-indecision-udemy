class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
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
    handlePick() { /* setting up a method here instead of the global scope */
        alert('hclicked');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this); // this is the right and efficient solution as it is not bound at every each render
    }
    handleRemoveAll() {
        alert('handleRemoveAll');
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                {/*<button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>  handleRemoveAll method must be bound to 'this' explicitly in order to use this.props on this method -> expensive solution */}
                <button onClick={this.handleRemoveAll}>Remove All</button>
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
    handleAddOption(e) {
        e.preventDefault(); // prevent page to refresh only
        const option = e.target.elements.option.value.trim(); //the trim() method removes whitespace from both ends of a string
        if(option){
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
