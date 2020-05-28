// detects when the other transform is farther than closeDistance
// this is faster than using Vector3.magnitude


//Attach to AiCar's WaypointReceiver

var other : Transform;
//~ other = GameObject.Find("3rd Person Controller").transform;
other = GameObject.Find("CamSphere").transform;
other.hideFlags = HideFlags.NotEditable;
//var farDistance = 50.0;

//~ var playerCol : Transform;
//~ playerCol= GameObject.Find("Collider").transform;


function Update() {

//~ CheckNearPlayer();
	//~ var sqrLen = (other.position - transform.position).sqrMagnitude;
	var destroyDist = (other.position - transform.position).magnitude;   //sqrMagnitude;
("CamSphere Dist from AI = " + destroyDist);
if (destroyDist >250) {
	Destroy(gameObject);
	//Destroy(GameObject.Find("PathA"));
	
	//var spawnpoint : GameObject = GameObject.Find("PathA") ;
	
	//var PathAInstance : GameObject = Instantiate(Resources.Load("PathA"));
	//var AICarInstance : GameObject = Instantiate(Resources.Load("AICar&Waypoint"));
	
	//}else{
//	Debug.Log(Dist + "  Malapit");
}


}



//CheckNearPlayer();

// square the distance we compare with
//if( sqrLen == farDistance*farDistance ) {

	//Debug.Log(farDistance);
	
	//Destroy( gameObject);
//}else{
//Debug.Log(sqrLen);
//print ("The other transform is close to me!");




//~ function CheckNearPlayer() {
//~ Debug.Log("Checking Near Player");
//~ var DistPlayer = (playerCol.position - transform.position).sqrMagnitude;
//~ Debug.Log(DistPlayer );
//~ if (DistPlayer <= 45) {	
			//~ var go = GameObject.Find("AICar");
			//~ go.GetComponent("AICarA_Script_tweak").NavigationStop();
		
//	}else{
			//go.GetComponent("AICarA_Script_tweak").GetWaypoints();
//			go.GetComponent("AICarA_Script_tweak").NavigateTowardsWaypoint();
//~ }

//~ }


