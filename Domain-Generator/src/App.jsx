import React, { Component } from 'react'
import Header from './Components/Header'
import SearchBox from './Components/SearchBox'
import ResultContainer from './Components/ResultContainer'
import './App.css'
import name from '@rstacruz/startup-name-generator'

export class App extends Component {
    state = {
        headerText: "Just Name It!!",
        headerExpended: true,
        suggestedNames: []
    }

    handleinputChange = (inputText) => {
        const headerTop = document.querySelector(".head-image");
        this.setState({
            headerExpended: !(inputText.length > 0),
            suggestedNames: (inputText.length > 0) ? name(inputText) : []
        })
        if (inputText !== '') {
            headerTop.classList.remove('head-image-expanded');
            headerTop.classList.add("head-image-contracted")
        } else {
            headerTop.classList.remove('head-image-contracted');
            headerTop.classList.add("head-image-expanded")
        }
    }

    render() {
        return (
            <div>
                <Header
                    headerText={this.state.headerText}
                    headerExpended={this.state.headerExpended} />
                <SearchBox onInputChange={this.handleinputChange} />
                <ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

export default App
