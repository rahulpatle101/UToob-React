//dependencies
import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="media-list-item" onClick={() => onVideoSelect(video)}>
      <img className="media-left" src={imageUrl} />
      {video.snippet.title}
    </li>
  )
};

export default VideoListItem;
