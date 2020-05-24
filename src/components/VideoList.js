import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map(video => (
            <VideoItem key={video.id.videoId}
                       video={video}
                       onVideoSelect={onVideoSelect}/>
        )
    );

    return (
        <div className="seven wide tablet    six wide computer  column">
            <div className="ui raised segment">
                <div className="ui celled list">
                    {renderedList}
                </div>
            </div>
        </div>
    )
};

export default VideoList