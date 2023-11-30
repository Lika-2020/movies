import React from "react";

class Search extends React.Component {

    state = {
        search: '',
        type: 'all'

    }

    handleKey = (event, search) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
      
    }

    isButtonDisabled = () => {
        return this.state.search.trim() === '';
      };

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        });
       
    };

    render() {
        return (
            <div className="row">

                <div className="input-field">
                    <input
                        placeholder="search"
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKey}
                    />
                    <button className="btn #2196f3 blue search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)} disabled={this.isButtonDisabled()}>Search</button>
                </div>
                <div>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type='all' onChange={this.handleFilter}  checked={this.state.type === 'all'} disabled={this.isButtonDisabled()} />
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type='movie' onChange={this.handleFilter} checked={this.state.type === 'movie'} disabled={this.isButtonDisabled()} />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type='series'onChange={this.handleFilter}  checked={this.state.type === 'series'} disabled={this.isButtonDisabled()} />
                        <span>Series only</span>
                    </label>
                </div>
            </div>

        )
    }
}

export { Search }