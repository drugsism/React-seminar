<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <link href="/css/app.css" rel="stylesheet" type="text/css" />
        <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">Login Component</div>

                            <div class="card-body">
                            Login component!
                            </div>

                            
                        </div>
                        <div>
                            <div class="card-body">
                                <a href="/login">Laravel Router</a>
                            </div>
                            <div class="card-body">
                                 <a href="/getWorkouts">React Router</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </body>
</html>
