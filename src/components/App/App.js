import React, { Component } from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

class App extends Component {
    state = {
        headerText: 'Name It!',
    };

    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} />
                <SearchBox />
            </div>
        );
    }
}

export default App;
