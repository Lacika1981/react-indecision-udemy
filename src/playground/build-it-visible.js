class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    toggleVisibility() {
        this.setState((prevState) => {
            console.log(prevState);
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && <p>'I am showing'</p>}
            </div>
        )
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


//let isIt = false;
//
//const showMe = () => {
//    isIt = !isIt;
//    buildIt();
//}
//
//const buildIt = () => {
//    const visibility = (
//        <div>
//            <h1>Visibility Toggle</h1>
//            <button onClick={showMe}>{isIt ? 'Hide Details' : 'Show Details'}</button>
//            {isIt ? <p>'I am showing'</p> : null}
//            {/* isIt && <p>'I am showing'</p> */}
//        </div>
//    );
//    ReactDOM.render(visibility, appRoot);
//};
//
//const appRoot = document.getElementById('app');
//buildIt();