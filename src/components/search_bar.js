import React, { Component } from 'react';
class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term : ''};
    }

    render() {
        return(
          <div className="search-bar">
                <input
                    value = {this.state.term}
                    onChange = {(event) => this.onInputChange(event.target.value)} // comment this line out and show input is not reflected with keystrokes.
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term:term});
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;