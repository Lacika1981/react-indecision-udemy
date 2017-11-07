import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>
    (
        <Modal
        isOpen = {!!props.selectedOption}
        contentLabel = 'Selected Option'
        onRequestClose = {props.handleRemoveModal}//onRequestClose is a JSX attribute. Using this you can click out of Modal or use 'escape' to close modal
        >
        <h3>Selected option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleRemoveModal}>Okay</button>
        </Modal>
    )

export default OptionModal;