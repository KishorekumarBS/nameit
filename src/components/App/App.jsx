import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';

export default class App extends Component {
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
