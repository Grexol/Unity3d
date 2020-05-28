


//~ var balls : ArrayList; 

//~ function Start() { balls = new ArrayList();
//~ // Instantiate ball for test-purpose 
//~ var newBall : GameObject = Instantiate(Resources.Load("Cube"),Vector3(10.0,0.0,10.0),Quaternion.identity); 
//~ balls.Add(newBall.gameObject); // Notice .gameObject
//~ }

//~ function findClosestBall(ball_x : int, ball_y : int) : GameObject {

	//~ var closestBall : GameObject; 
	//~ var shortestDistance : float = 9999; 
	//~ var ballPos : Vector3; 
	//~ var coordinatePos : Vector3; 
	//~ var distanceVector : Vector3;

	//~ for(var ball : GameObject in balls){ 
		//~ ballPos = ball.transform.position; 
		//~ coordinatePos = Vector3(ball.x, ball.x, ball.z); 
		//~ distanceVector = ballPos - coordinatePos;

		//~ if (distanceVector.magnitude < shortestDistance){ 
			//~ closestBall = ball; 
			//~ shortestDistance = distanceVector.magnitude; 
		//~ } 

	//~ } return closestBall; 
	
//~ } 