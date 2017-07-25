// library imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
// component imports
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

// constants / globals
const API_KEY = 'AIzaSyC7fJLJeXfUc8M14rDK7Mi0fRKaEhe2N_U';

// Create a new component
// This component will produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('Surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos,                   // [1]
        selectedVideo:  videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce(((term) => {this.videoSearch(term)}), 300);
    return (
      <div>
        <SearchBar
          onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => { this.setState({selectedVideo}) }} />  // [2]
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

/*
[1] Condensed ES6 way of saying
    this.setState( {videos : videos} );

[2] Same as [1]
*/
