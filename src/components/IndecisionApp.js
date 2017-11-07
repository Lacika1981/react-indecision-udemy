import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option //it gives back falseif item is in Array and remove the item
            )
        }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        }
        else if (this.state.options.includes(option)) {
            return 'This option is already added to the list'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    handleRemoveModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    render() {
        const subTitle = 'Put your life in hands of a computer';

        return (
            <div>
                <Header subTitle={subTitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption} />
                    <AddOption handleAddOption={this.handleAddOption} />
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleRemoveModal={this.handleRemoveModal} />
            </div>
        );
    }

    componentDidMount() { //runs only if new instances of IndecisionApp was mounted
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all - empty array is returned
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) { //if length is equal no save is done
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data'); //runs only if props or state is updated
        }
    }

    componentWillUnmount() {
        console.log('componentWillUmount'); //runs only if the whole page renders
    }




}