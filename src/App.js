import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from "./components/search-box/search-box";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(dataJson => this.setState({ monsters: dataJson }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="search monter" handleChange={this.handleChange} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}


export default App;
