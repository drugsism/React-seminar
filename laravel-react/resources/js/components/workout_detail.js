import React from 'react';

const WorkoutDetail = ({exercise}) => {
    if (!exercise) {
        return <div>Loading...</div>;
    }

    const videoId = exercise.video;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{exercise.name}</div>
                <div>{exercise.description}</div>
            </div>
        </div>
    );
}

export default WorkoutDetail;