import React, { Component } from 'react';
import WorkoutDetail from './workout_detail';
import WorkoutList from './workout_list';

class GetWorkouts extends Component {
    constructor(props){
        super(props);
        this.state = {
            workOuts: [],
            selectedExercise: null
        }
    }

    componentWillMount() {
        axios.get('/api/getWorkouts').then(response => {
            // console.log(response.data)
            this.setState({
                workOuts: response.data,
                selectedExercise: response.data[0]
            })
        }).catch(error => {
            console.log(error);
        }) 
    }

    render() {
        return(
            <div className="container">
                <WorkoutDetail exercise={this.state.selectedExercise}/>
                <WorkoutList 
                    onExerciseSelect={
                        selectedExercise => this.setState({ selectedExercise })
                    }
                    workouts={this.state.workOuts}
                />
            </div>
                
        );
    }
}

export default GetWorkouts;