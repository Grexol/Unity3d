//Attach to waypoint to detect a near car and if detected the car will go here


function Update () {

var forward = transform.TransformDirection(Vector3.forward);
Debug.DrawRay(transform.position, forward * 35, Color.green);

var hit : RaycastHit;
var distance : float = 35;

	if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit, distance)) { 
			
			if(hit.collider.transform.name == "WaypointReceiver") { 
							
				var spawnpoint : GameObject = GameObject.Find("PATHB") ;
				transform.transform.parent = spawnpoint.transform;

		}else{ 
		//Debug.Log("waiting AIcar");
			
	}

}

}


//~ function OnMouseDown(){
//~ //	if (Input.GetKey (KeyCode.B)) {
//~ Destroy(AICar_Script_tweak);
//~ }
	
	
	
	
	
//~ if ((Input.GetKey ("s")) && GetComponent (AICar_Script_tweak))
//~ Destroy (GetComponent (AICar_Script_tweak));

//~ }

	//~ GetComponent(AICar_Script_tweak);
	//~ AICar_Script_tweak.NavigateTowardsWaypoint. FrontRightWheel.brakeTorque = 999;
	//~ //AICar_Script_tweak.NavigateTowardsWaypoint. FrontLefttWheel.brakeTorque = 999;
    //~ Debug.Log("Going");
