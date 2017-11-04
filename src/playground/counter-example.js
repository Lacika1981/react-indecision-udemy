class Counter extends React.Component {
    constructor(props) { //constructor needed to be able to bind 'this' to each method
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleAddOne() {
        console.log('addedOne');
    }

    handleMinusOne() {
        console.log('deducted one');
    }

    handleReset() {
        console.log('reset');
    }
    render() {
        return (
            <div>
                <h1>Count: </h1>
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