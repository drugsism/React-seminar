import React from 'react';

const WorkoutList = (props) => {
    const workoutItem = props.workouts.map((exercise) => {
        const exerciseImgUrl = `https://img.youtube.com/vi/${exercise.video}/mqdefault.jpg`;
      
        return (
            <li key={exercise.id} onClick={() => props.onExerciseSelect(exercise)} className="list-group-item">
                <div className="exercise-list media">
                    <div className="media-list">
                        <img className="exercise-img media-object" src={exerciseImgUrl} />
                    </div>
                    <div className="exercise-name media-body">
                        <div className="media-heading">{exercise.name}</div>
                    </div>
                </div>
            </li>
        )
    });
    return (
        <ul className="col-md-4  list-group">
            {workoutItem}
        </ul>
    );
};

export default WorkoutList;