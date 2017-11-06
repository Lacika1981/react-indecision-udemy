class Counter extends React.Component {
    constructor(props) { //constructor needs to be able to bind 'this' to each method
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = { // all the changing data is stored in 'state' object
            count: 0
        }
    }
    handleAddOne() {
        this.setState((prevState) => { //prevState is an object with the previos value
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => { //passing a function to this.setState is the right way to do
            return {
                count: 0
            };
        });
        /* //passing an object is not good method
        this.setState({
            count: 0
        });
        this.setState({
            count: this.state.count + 1 //it will add 1 to the current value without resetting the value to 0
        }); */
    }

    componentDidMount() { //runs only if new instances of IndecisionApp was mounted
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount);

            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch (e) {
            // Do nothing at all - empty array is returned
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) { //if value is equal no save is done
            localStorage.setItem('count', this.state.count);
            console.log('saving data'); //runs only if props or state is updated
        }
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>)
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));







/* let count = 0;

const addOne = () => {
    count++;
    changingCounter();
};

const minusOne = () => {
    count--;
    changingCounter();
};

const reset = () => {
    count = 0;
    changingCounter();
};

const changingCounter = () => {
    const templateTwo = (
        <div>
            <h1>
                Count: {count}
            </h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>RESET</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

changingCounter(); */