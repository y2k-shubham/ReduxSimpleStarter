import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {  // [1]
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li
      className="list-group-item"
      onClick={() => {onVideoSelect(video)}} >

      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>

    </li>
  );
};

export default VideoListItem;

/*
[1] It's the ES6 shorthand for
    const VideoListItem = (props) => {
      const video = props.video;
      const onVideoSelect = props.onVideoSelect;
    }
*/
