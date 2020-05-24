import React from "react";
import axiosObject from "../api/youtube";
import './App.css';

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Footer from "./Footer";

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
        error: null
    };

    componentDidMount() {
        const defaultSearch = 'deep space house';
        this.getSearchBarState(defaultSearch)
    }

    getSearchBarState = async (term) => {

        await axiosObject.get(
            '/search',
            {
                params: {q: term}
            })
            .then(response => this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            })).catch(error => this.setState({
                error: error
            }))
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    };

    renderMenu = () => (
        <div className="ui segment clearing basic blue inverted">
            <div className="ui container">
                <div className="ui row">

                    <div className="ui grid   three column   center aligned">

                        <div className="three wide column    mobile hidden">
                            <div className="ui labeled icon menu compact blue inverted">
                                <a className="item" href="/">
                                    <i className="youtube icon"/>YouTube Player
                                </a>
                            </div>
                        </div>

                        <div className="sixteen wide mobile   ten wide tablet    ten wide computer   column">
                            <span className="fitted item">
                                <SearchBar onFormSubmit={this.getSearchBarState}/>
                            </span>
                        </div>

                        <div className="three wide column    mobile hidden">
                            <div className="ui labeled icon menu compact blue inverted">
                                <a className="item"
                                   href="https://github.com/WebDevelopUa/youtube"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <i className="github icon"/>Source Code
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )

    renderMain = () => (this.state.selectedVideo === null && this.state.error === null) ? (
        <div className="ui clearing segment full-height">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">
                    <p className="ui header blue">Loading ...</p>
                </div>
            </div>
        </div>
    ) : (this.state.error) ? (
        <div className="ui clearing segment full-height">
            <div className="ui active inverted dimmer">
                <div className="ui indeterminate text loader">
                    <p className="ui header red">Something went wrong!</p>
                </div>
            </div>
        </div>
    ) : (
        <div className="ui main container">
            <div className="ui row">
                <div className="ui stackable grid two column">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                </div>
            </div>
        </div>
    )

    render() {
        return (
            <div>
                {this.renderMenu()}
                {this.renderMain()}
                <Footer/>
            </div>
        )
    }
}

export default App