console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title: 'My First App',
    subTitle: 'React App',
    options: []
}

const onFormSubmit = (e) => { //takes the value from the text field and add it to the app.options array
    e.preventDefault(); // prevent page to refresh only
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ''; // makes input field empty
        renderTemplate();
    }
}

const removeAll = () => {
    app.options.length = 0; //empty the array and set mty all references if there is any
    renderTemplate();
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
   alert(option);
}

/* const numbers = [1, 2, 3]; */

const renderTemplate = () => {
    const template = (
        <div>
            <h1>
                {app.title}
            </h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            {/* logical AND - second argument is returned if true or nothing */}
            <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            {/* <p></p> is around the ternary condition */}
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            {/* numbers.map(number => <p key={number}>{number}</p>) */}
            <ol>
                {
                    app.options.map(option => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
renderTemplate();