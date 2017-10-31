console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title: 'My First App',
    subTitle: 'React App',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>
            {app.title}
        </h1>
        {app.subTitle && <p>{app.subTitle}</p>} {/* logical AND - second argument is returned if true or nothing */}
        <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p> {/* <p></p> is around the ternary condition */}
        <ol>
            <li>First Item</li>
            <li>Second Item</li>
        </ol>
    </div>
);


let count = 0;

const addOne = () => {
    console.log('addOne');
};

const minusOne = () => {
    console.log('minusOne');
};

const reset = () => {
    console.log('Reset');
};


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

console.log(templateTwo);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);