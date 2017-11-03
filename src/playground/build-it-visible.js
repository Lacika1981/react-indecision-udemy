let isIt = false;

const showMe = () => {
    isIt = !isIt;
    buildIt();
}

const buildIt = () => {
    const visibility = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showMe}>{isIt ? 'Hide Details' : 'Show Details'}</button>
            {isIt ? <p>'I am showing'</p> : null }
            {/* isIt && <p>'I am showing'</p> */}
        </div>
    );
    ReactDOM.render(visibility, appRoot);
};

const appRoot = document.getElementById('app');
buildIt();