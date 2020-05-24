import React from "react";

class SearchBar extends React.Component {
    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value.toUpperCase()})
    };

    onInputSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    };


    render() {
        return (
            <div className="ui blue inverted search-bar segment clearing full-width">

                <form className="ui form" onSubmit={this.onInputSubmit}>
                    <div className="ui field">
                        <label className="ui huge header white"><i className="search icon"/>Search Video</label>

                        <div className="ui icon input">
                            <input type="text"
                                   placeholder="Search..."
                                   value={this.state.term}
                                   onChange={this.onInputChange}/>
                            <i className="search icon"/>
                        </div>

                    </div>
                </form>

            </div>
        )
    }
}

export default SearchBar