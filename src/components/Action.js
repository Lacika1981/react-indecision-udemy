import React from 'react';

const Action = (props) => (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions} //if it is false the button is disabled
            >
                What should I do
                </button>
        </div>
    );

export default Action;