<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use DB;
use App\User;

class UserController extends Controller
{
    public function index()
    {
        //
        $userOne = User::where('id', '70249')->first();
        return response()->json($userOne);
    }

    public function getUserSet()
    {
        $userSet = DB::select("SELECT * FROM users ORDER BY created_at DESC LIMIT 1, 10");
        return response()->json($userSet);
        // return "test";

    }

    public function getWorkouts() 
    {   
        $user_id = '70249';
        $workouts = //나만의 운동
        $favorites_workouts = DB::table('favorites_exercise')
						->join('exercises', 'exercise_id', '=', 'exercises.id')
						->where('user_id', $user_id)
						->select('favorites_exercise.id', 'exercise_id','name','description','video','file','trainer_id','set','number','weight','times')
                        ->orderBy('favorites_exercise.created_at','desc')
                        ->get();
        return response()->json($favorites_workouts);                       
    }

}
