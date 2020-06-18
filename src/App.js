import React from 'react';
import TextField from './components/TextField'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: ''
    }
  }

  handeleChange = e => {
    this.setState({ searchTerms: e.target.value })
  }
  render() {
    return (
      <div className="container mt-5">
        <p>Search here to find the user information</p>
        <TextField placeholder="Search here.." name="searchTerms" value={this.state.searchTerms} onChange={this.handeleChange} />
      </div>
    );
  }
}
export default App;
