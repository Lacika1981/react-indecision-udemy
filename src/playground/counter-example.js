let count = 0;

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

changingCounter();