import React from 'react';
import Option from './Option';

const Options = (props) =>(
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

export default Options;