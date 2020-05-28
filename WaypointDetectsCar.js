//Attach to waypoint to detect Player and spawn car 
										
//var target : Transform; //assign the WaypointReceiver collider at AICar Colliders

@HideInInspector
var playerCol : Transform;
playerCol = GameObject.Find("3rd Person Controller").transform;

var spawnRate = 100.0;
private var nextspawn = 0.0;

function Update() {

	//~ var Dist : int = (playerCol.position - transform.position).sqrMagnitude;
	//~ Debug.Log(Dist);
	
	//~ if (Dist == 1807 && spawnRate != spawnRate) {
	
		//~ nextspawn =  Time.time + spawnRate ;
		//~ var AICarInstance : GameObject = Instantiate(Resources.Load("AICar&Waypoint"), Vector3(0, 10, 0), Quaternion.identity);
		//~ var carTrans = AICarInstance.transform;
		//~ carTrans.Translate(transform.position.x, transform.position.y,transform.position.z );
	
	//~ }
	
	//~ // to be used for "AiCarA_Script_tweak.js" NavigateTowardsWaypoint()
	//~ var RelativeWp: Vector3 = transform.InverseTransformPoint( Vector3( 
												//~ transform.position.x, 
												//~ transform.position.y, 
												//~ transform.position.z ) );
		
	var forward = transform.TransformDirection(Vector3.forward);
	Debug.DrawRay(transform.position, forward * 20, Color.green);
	//~ var hit : RaycastHit;
	//~ var hitDistance : float = 20;
	//~ if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit, hitDistance)) { 	
	
		//~ if(hit.collider.transform.name == "PlayerCollider" ) { 		
		
		//~ var AICarInstance : GameObject = Instantiate(Resources.Load("AICar&Waypoint"), Vector3(0, 10, 0), Quaternion.identity);
			//var go = GameObject.Find("AICar&Waypoint");
		//~ var AICarInstance : GameObject = Instantiate(Resources.Load("AICar&Waypoint"));
		//~ var carTrans = AICarInstance.transform;
		//~ carTrans.Translate(transform.position.x, transform.position.y,transform.position.z );
		//~ Debug.Log("PlayerCollider was HIT");
		//~ }
	//}

//~ var relativePos = playerCol.position - transform.position; // Debug purpose
//~ var rotate = Quaternion.LookRotation(relativePos);
//~ transform.rotation = rotate;

//~ yield WaitForSeconds (5);
//~ var AICarInstance : GameObject = Instantiate(Resources.Load("AICar&Waypoint"), Vector3(transform.position.x, transform.position.y,transform.position.z ), Quaternion.identity);
//yield WaitForSeconds (5);
}


//~ function OnTriggerEnter (myTrigger : Collider) {
	//~ if(myTrigger.gameObject.name == "PlayerCollider" ) {
	//~ Debug.Log(myTrigger);
		//~ var AICarInstance : GameObject = Instantiate(Resources.Load("AICar&Waypoint"), Vector3(0, 10, 0), Quaternion.identity);
		//~ //var AICarInstance : GameObject = Instantiate(Resources.Load("AICar&Waypoint"), Vector3(transform.position.x, transform.position.y,transform.position.z ), Quaternion.identity);
		//~ var carTrans = AICarInstance.transform;
		//~ AICarInstance.transform = GameObject.transform;
		//~ //yield WaitForSeconds (5);
	//~ }
//~ }