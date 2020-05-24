import React from "react";

const VideoDetail = ({video}) => {
    const videoSrc = `https://youtube.com/embed/${video.id.videoId}?&modestbranding=1&autoplay=1&controls=1&fs=1&loop=0&rel=1&showinfo=0&disablekb=1`;

    if (!video) {
        return null
    } else return (
        <div className="nine wide tablet    ten wide computer  column">
            <div className="ui raised segments">
                <div className="ui segment">
                    <div className="ui embed">
                        <iframe title="YouTube Browser Player"
                                src={videoSrc}
                                frameBorder="0"
                                allowFullScreen/>
                    </div>
                </div>
                <div className="ui secondary segment">
                    <p className="ui header big blue">
                        {video.snippet.title}
                    </p>
                    <p>
                        {video.snippet.description}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default VideoDetail