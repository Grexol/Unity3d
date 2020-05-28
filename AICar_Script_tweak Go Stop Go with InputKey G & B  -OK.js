
var FrontLeftWheel : WheelCollider;
var FrontRightWheel : WheelCollider;

var GearRatio : float[];
var CurrentGear : int = 0;

var EngineTorque : float = 600.0;
var MaxEngineRPM : float = 3000.0;
var MinEngineRPM : float = 1000.0;
private var EngineRPM : float = 0.0;

var waypointContainer : GameObject;
private var waypoints : Array;
private var currentWaypoint : int = 0;

private var inputSteer : float = 0.0;
private var inputTorque : float = 0.0;

function Start () {
	GetComponent.<Rigidbody>().centerOfMass.y = -1.5;
	//~ GetWaypoints();
}

function Update () {

	GetComponent.<Rigidbody>().drag = GetComponent.<Rigidbody>().velocity.magnitude / 250;
	
	if (Input.GetKey (KeyCode.G)) {
		NavigateTowardsWaypoint();
		//Debug.Log("Going");
	}
	if (Input.GetKey (KeyCode.B)) {
		NavigationStop();
		//Debug.Log("Stoping");
	}	
	
	EngineRPM = (FrontLeftWheel.rpm + FrontRightWheel.rpm)/2 * GearRatio[CurrentGear];
	ShiftGears();
	GetComponent.<AudioSource>().pitch = Mathf.Abs(EngineRPM / MaxEngineRPM) + 1.0 ; 
	if ( GetComponent.<AudioSource>().pitch > 2 ) { // 2.0
		GetComponent.<AudioSource>().pitch = 2; // 2.0
	}
	FrontLeftWheel.motorTorque = EngineTorque / GearRatio[CurrentGear] * inputTorque;
	FrontRightWheel.motorTorque = EngineTorque / GearRatio[CurrentGear] * inputTorque;
	FrontLeftWheel.steerAngle = 60 * inputSteer;
	FrontRightWheel.steerAngle = 60 * inputSteer;
	
}

function NavigateTowardsWaypoint () {
	GetWaypoints();
		FrontRightWheel.brakeTorque = 0;
		FrontLeftWheel.brakeTorque = 0;
	var RelativeWaypointPosition : Vector3 = transform.InverseTransformPoint( Vector3( 
												waypoints[currentWaypoint].position.x, 
												transform.position.y, 
												waypoints[currentWaypoint].position.z ) );	
		inputSteer = RelativeWaypointPosition.x / RelativeWaypointPosition.magnitude;
		if ( Mathf.Abs( inputSteer ) < 0.5 ) { // 0.5
			inputTorque = RelativeWaypointPosition.z / RelativeWaypointPosition.magnitude - Mathf.Abs( inputSteer );
			Debug.Log(inputTorque);
			}else{
			inputTorque = 0.0;
		}
	if ( RelativeWaypointPosition.magnitude < 2) { //5		
			currentWaypoint ++;		
			if ( currentWaypoint == waypoints.length  ) {
				currentWaypoint = 0;  //  currentWaypoint = 0;  
				inputSteer  = 0.0;
				inputTorque = 0.0;
				FrontLeftWheel.motorTorque = 0;
				FrontRightWheel.motorTorque = 0;
				FrontRightWheel.brakeTorque = 999;
				FrontLeftWheel.brakeTorque = 999;
				FrontLeftWheel.steerAngle = 0;
				FrontRightWheel.steerAngle = 0;
			}		
	}
}

function NavigationStop() {
		 //FrontLeftWheel.motorTorque = 0;
		 //FrontRightWheel.motorTorque = 0;
		EngineRPM =0;
		inputSteer  = 0.0;
		inputTorque = 0.0;
		Debug.Log(inputTorque);
		FrontRightWheel.brakeTorque = 99;
		FrontLeftWheel.brakeTorque = 99;
		FrontLeftWheel.steerAngle = 0;
		 FrontRightWheel.steerAngle = 0;
}

function GetWaypoints () {
	var potentialWaypoints : Array = waypointContainer.GetComponentsInChildren( Transform );
	waypoints = new Array();	
	for ( var potentialWaypoint : Transform in potentialWaypoints ) {
		if ( potentialWaypoint != waypointContainer.transform ) {
			waypoints[ waypoints.length ] = potentialWaypoint;
		}
	}
}

	function checkLightsAndCars() : System.Boolean {
	var hit : RaycastHit;
	var distance : float = 9;
	//DrawRay 10 forward	
	var forward = transform.TransformDirection(Vector3.forward);
	Debug.DrawRay(transform.position, forward * 9, Color.yellow);
	
	if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit, distance)) { //Define the raycast and check if it has hit anything
			//Debug.Log(hit.collider.transform.name);
			if(hit.collider.transform.name == "ColliderB2") { //Did we hit the gameObject called "StopArea"
				FrontRightWheel.brakeTorque = 999;
				FrontLeftWheel.brakeTorque = 999;
				FrontLeftWheel.motorTorque = 0;
				FrontRightWheel.motorTorque = 0;
				FrontLeftWheel.steerAngle = 0;
				FrontRightWheel.steerAngle = 0;
				}
		}else{ //We haven't hit anything that will stop us moving
			//return;
			FrontLeftWheel.steerAngle = 0;
			FrontRightWheel.steerAngle = 0;
			EngineTorque = 150; //Return true so the car can move
			
			//FrontLeftWheel.motorTorque = EngineTorque / GearRatio[CurrentGear] * inputTorque;
			//FrontRightWheel.motorTorque = EngineTorque / GearRatio[CurrentGear] * inputTorque;
	}
	
}

//~ var spawnpoint : GameObject = GameObject.Find("PathA") ;
//~ //var pathZero : GameObject = GameObject.Find("Path1/path0");

//~ function OnMouseDown () {
//~ transform.transform.parent = spawnpoint.transform;

//~ }


function ShiftGears() {
	if ( EngineRPM >= MaxEngineRPM ) {
		var AppropriateGear : int = CurrentGear;		
		for ( var i = 0; i < GearRatio.length; i ++ ) {
			if ( FrontLeftWheel.rpm * GearRatio[i] < MaxEngineRPM ) {
				AppropriateGear = i;
				break;
			}
		}
		CurrentGear = AppropriateGear;
	}	
	if ( EngineRPM <= MinEngineRPM ) {
		AppropriateGear = CurrentGear;		
		for ( var j = GearRatio.length-1; j >= 0; j -- ) {
			if ( FrontLeftWheel.rpm * GearRatio[j] > MinEngineRPM ) {
				AppropriateGear = j;
				break;
			}
		}		
		CurrentGear = AppropriateGear;
	}
}
