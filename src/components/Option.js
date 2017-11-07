import React from 'react';

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText} {/* retrieving the data */}
            <button 
            onClick= {(e) => {props.handleDeleteOption(props.optionText)}}>
            Remove
            </button>
        </div>
    );
};

export default Option;