//edited by: Serigrapher -CTTO of original
// edited by Grexol 
// Assign a red color to this transform's material
//~ transform.renderer.material.color = Color.yellow;

var stoped : int = 0; // 1 in NavigationStop()

//@HideInInspector
var FrontLeftWheel : WheelCollider ;
//@HideInInspector
var FrontRightWheel : WheelCollider;

var GearRatio : float[];
var CurrentGear : int = 0;

var EngineTorque : float = 600.0;
var MaxEngineRPM : float = 3000.0;
var MinEngineRPM : float = 1000.0;
private var EngineRPM : float = 0.0;

//@System.NonSerialized
@HideInInspector
var DaanContainer : GameObject;
//DaanContainer.hideFlags = HideFlags.NotEditable;
//~ var PathInstance : GameObject = Instantiate(Resources.Load("PATH"));

private var waypoints : Array;
private var currentWaypoint : int = 0;

private var inputSteer : float = 0.0;
private var inputTorque : float = 0.0; 


function Start() {
	GetComponent.<Rigidbody>().centerOfMass.y = -1.5;

}

function Update () {
	
	GetComponent.<Rigidbody>().drag = GetComponent.<Rigidbody>().velocity.magnitude / 250;
		
		if (Input.GetKey (KeyCode.B)) {
		NavigationStop();
		}else{
		//NavigateTowardsWaypoint();
		transform.GetComponent.<Renderer>().material.color = Color.green;
		//checkLightsAndCars() ;
	}	
		
	CheckNearPedPlayer() ;
//	CheckNearCar() ;
	
	EngineRPM = (FrontLeftWheel.rpm + FrontRightWheel.rpm)/2 * GearRatio[CurrentGear];

	ShiftGears();
	GetComponent.<AudioSource>().pitch = Mathf.Abs(EngineRPM / MaxEngineRPM) + 0.75 ; 
	if ( GetComponent.<AudioSource>().pitch > 2 ) { // 2.0
		GetComponent.<AudioSource>().pitch = 1.2; // 2.0
	}
	FrontLeftWheel.motorTorque = EngineTorque / GearRatio[CurrentGear] * inputTorque;
	FrontRightWheel.motorTorque = EngineTorque / GearRatio[CurrentGear] * inputTorque;
	FrontLeftWheel.steerAngle = 60 * inputSteer;
	FrontRightWheel.steerAngle = 60 * inputSteer;
	//Debug.Log("FrontLeftWheel.motorTorque  =" + FrontLeftWheel.motorTorque);
//	Debug.Log("FrontLeftWheel.steerAngle  =" + FrontLeftWheel.steerAngle);
	
	// test to prevent from keeping backward
		if (FrontLeftWheel.motorTorque < 0 ) {
				FrontLeftWheel.steerAngle = 80 * inputSteer;  //90 ok
				FrontRightWheel.steerAngle = 80 * inputSteer; // 90 ok
				FrontLeftWheel.motorTorque *= inputTorque;  // 40 ok
				FrontRightWheel.motorTorque *= inputTorque; // 40 ok
		}
	
	if(Input.GetKeyDown(KeyCode.Return)) {
		NavigationStop();
		var script = GetComponent("vehicleScript_simple");
		script.enabled = true;
		//this.enabled = false;	
	}
	//rigidbody.velocity = Vector3(0,10,0);
//	Debug.Log ("Car Velocity "+ rigidbody.velocity);
	//~ if (rigidbody.velocity.x == 0) {
		//~ Destroy(gameObject);           /// ???
	//~ }
}

function NavigateTowardsWaypoint () {

		GetWaypoints () ;
		var stopLight = GameObject.Find("CarlightBACK") ;
		stopLight.GetComponent.<Light>().intensity =0.0;
		var cubeRenderL = GameObject.Find("cubeBACKL") ;
		cubeRenderL.GetComponent.<Renderer>().enabled = false;
		var cubeRenderR = GameObject.Find("cubeBACKR") ;
		cubeRenderR.GetComponent.<Renderer>().enabled = false;
		
		
		FrontRightWheel.brakeTorque = 0;
		FrontLeftWheel.brakeTorque = 0;
		
		var RelativeWaypointPosition : Vector3 = transform.InverseTransformPoint( Vector3( 
												waypoints[currentWaypoint].position.x, 
												transform.position.y, 
												waypoints[currentWaypoint].position.z ) );	
												
		inputSteer = RelativeWaypointPosition.x / RelativeWaypointPosition.magnitude;
		if ( Mathf.Abs( inputSteer ) < 7.5 ) { // 0.5
			inputTorque = RelativeWaypointPosition.z / RelativeWaypointPosition.magnitude - Mathf.Abs( inputSteer );
			
			}else{
			inputTorque = 0.0;		
		}		
		
	if ( RelativeWaypointPosition.magnitude < 7) { //5
				FrontRightWheel.brakeTorque = 199;
				FrontLeftWheel.brakeTorque = 199;
				inputTorque  = 3.0;					
			    currentWaypoint ++;		
			if ( currentWaypoint == waypoints.length  ) {
				currentWaypoint =0;
				//NavigationStop();
				//Debug.Log("Navigation STOPed");
				
			}		
	 }
	//~ // test to prevent from keeping backward 
		//~ if (RelativeWaypointPosition.magnitude > 20 ) {
				//~ if ( FrontLeftWheel.motorTorque < 0 ) { //5
					//~ FrontLeftWheel.motorTorque =40;  // 40 ok
					//~ FrontRightWheel.motorTorque =40; // 40 ok
					//~ FrontLeftWheel.steerAngle = 80 * inputSteer;  //90 ok
					//~ FrontRightWheel.steerAngle = 80 * inputSteer; // 90 ok
				//~ }
		//~ }
}


function NavigationStop() {
				//currentWaypoint =0;
				//inputTorque = 0.0;	
				//inputSteer  = 0.0;
				FrontLeftWheel.motorTorque = 0;
				FrontRightWheel.motorTorque = 0;
				FrontRightWheel.brakeTorque = 999;
				FrontLeftWheel.brakeTorque = 999;
				FrontLeftWheel.steerAngle = 0;
				FrontRightWheel.steerAngle = 0;
				//EngineRPM  = 0.0;
				//currentGear  = 0;
				
				//transform.renderer.material.color = Color.magenta;
				var stopLight = GameObject.Find("CarlightBACK") ;
				stopLight.GetComponent.<Light>().intensity =0.5;	
				var cubeRenderL = GameObject.Find("cubeBACKL") ;
				cubeRenderL.GetComponent.<Renderer>().enabled = true;
				var cubeRenderR = GameObject.Find("cubeBACKR") ;
				cubeRenderR.GetComponent.<Renderer>().enabled = true;			
				//Debug.Log("Navigation TIGIL");
				//stoped  = 1;
				
}


function GetWaypoints () {
	
	DaanContainer = GameObject.Find("PathA") ;
	DaanContainer.hideFlags = HideFlags.NotEditable;
	
	//var go = GameObject.Find("z");
	//~ DaanContainer = go.GetComponent("WaypointDetectsCar").z;
	
	var potentialWaypoints :  Array = DaanContainer.GetComponentsInChildren( Transform );

	waypoints = new Array();	
	for ( var potentialWaypoint : Transform in potentialWaypoints ) {
		if ( potentialWaypoint != DaanContainer.transform ) {
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
			if(hit.collider.transform.name == "PlayerCollider" && hit.collider.transform.name == "Collider2") {  //Did we hit the gameObject called "PlayerCar collider"
				//transform.renderer.material.color = Color.red;
				NavigationStop();
				//Destroy(this);
				
				}else{ //We haven't hit anything that will stop us moving
				NavigateTowardsWaypoint ();
			}
	}
}

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


var playerColTrans : Transform;
playerColTrans = GameObject.Find("PlayerCollider").transform;

var wrTrans : Transform;
wrTrans= GameObject.Find("WaypointReceiver").transform;

function CheckNearPedPlayer() {
var Dist1 = (playerColTrans.position - wrTrans.position).sqrMagnitude;
	if (Dist1 <= 7) {
		NavigationStop();
		}else{
		NavigateTowardsWaypoint();
	}
}



//~ var pos : Vector3 = transform.position;

//~ function OnTriggerEnter (myTrigger : Collider) {
	//~ //Debug.Log(myTrigger);
	//~ if(myTrigger.gameObject.name == "WaypointReceiver" ) {
	//~ NavigationStop();
	//~ Debug.Log("Tinamaan ang SPEHERE! kaya Nav STOPPEd");

	//~ }

//~ }




//~ function OnCollisionStay(collision : Collision) {
//~ // Check if the collider we hit has a rigidbody
//~ // Then apply the force
//~ for (var contact : ContactPoint in collision.contacts) {
//~ print(contact.thisCollider.name + " hit " + contact.otherCollider.name);
//~ // Visualize the contact point
//~ Debug.DrawRay(contact.point, contact.normal, Color.white);
//~ }
//~ }




var stringToEdit : String = "Hello World";

function OnGUI () {
// Make a text field that modifies stringToEdit.
stringToEdit = GUI.TextField (Rect (10, 10, 200, 20), stringToEdit, 25);
//NavigationStop();
}


