import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            {/*<button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>  handleRemoveAll method must be bound to 'this' explicitly in order to use this.props on this method -> expensive solution */}
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
            /* this.props.options.map(option => <p key={option}>{option}</p>) */
            props.options.map((option, index) => (
                <Option
                    key={option}
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption} />
            )) //rendering a new instances of Option and have access to data via optionText(it can be named anything)
        }
    </div>
);

export default Options;