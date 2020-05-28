//attach to parent                                                       //by Serigrapher
 
var lastPos: Vector3;

var newVector3Pos: Vector3 ;

function OnDrawGizmos(){	// ok

	var waypoints = gameObject.GetComponentInChildren (Transform);	
	
	for (var waypoint: Transform in waypoints) {
	
		
	 	//  Gizmos.DrawWireSphere(waypoint.position, 1);	
		if (waypoint.transform.tag == "pointkanto")
				Gizmos.color = Color.magenta;
				
		if (waypoint.transform.tag == "pointleft")
				Gizmos.color = Color.red;
		
		if (waypoint.transform.tag == "point")
			Gizmos.color = Color.gray;
		
		Gizmos.DrawWireCube (waypoint.position, Vector3 (2,2,2));
		Gizmos.color = Color.gray;
		Gizmos.DrawLine(waypoint.position, lastPos)	;		
		lastPos = waypoint.position;
	
	
	}	


	var Paths = gameObject.GetComponentInChildren (Transform); //OK
	
		
	var i : int = 0;
	for (var rot : Transform in Paths) {
			 var rotName : String =  "" + i;
			 i++;
			rot.name = rotName;

			relativePos = newVector3Pos- rot.position ; 
			 
			rotate = Quaternion.LookRotation(relativePos);
			rot.rotation = rotate;	
			//~ transform.position = Vector3(transform.position.x,5,transform.position.z);
			//transform.rotation = Quaternion.Inverse(newVector3Pos);	
			//rot.transform.Translate(0, 0, 0);
			
			newVector3Pos = rot.position;
			
			
			//~ var forwards = transform.TransformDirection(Vector3.forward);  //  optional
			//~ Debug.DrawRay(transform.position, forwards * 3, Color.magenta);
			
	}


}


	//Debug.Log("First : " + FirstVector3Pos);



		//~ var forward = transform.TransformDirection(Vector3.forward);
		//~ Debug.DrawRay(rot.position, forward * 1, Color.magenta);






//~ function OnDrawGizmos(){	// OK

	//~ var Paths = gameObject.GetComponentInChildren (Transform);
		
	

		
	//~ for (var rot : Transform in Paths) {
	
			//~ var lastPos: Transform = transform.position;

			//~ var relativePos =lastPos.position - rot.position ; 
			//~ var rotate = Quaternion.LookRotation(relativePos);
			//~ rot.rotation = rotate;		
			
			//~ lastPos.position = rot.position;


	//~ }
	
		//~ var forward = transform.TransformDirection(Vector3.forward);
		//~ Debug.DrawRay(transform.position, forward * 1, Color.magenta);

//~ }
