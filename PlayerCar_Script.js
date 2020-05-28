// ----------- CAR TUTORIAL SAMPLE PROJECT, ? Andrew Gotow 2009 -----------------

// Here's the basic car script described in my tutorial at www.gotow.net/andrew/blog.
// A Complete explaination of how this script works can be found at the link above, along
// with detailed instructions on how to write one of your own, and tips on what values to 
// assign to the script variables for it to work well for your application.

// Contact me at Maxwelldoggums@Gmail.com for more information.

// Assign a red color to this transform's material
transform.GetComponent.<Renderer>().material.color = Color.blue;


// These variables allow the script to power the wheels of the car.
//@HideInInspector
var FrontLeftWheel : WheelCollider;
//@HideInInspector
var FrontRightWheel : WheelCollider;

// These variables are for the gears, the array is the list of ratios. The script
// uses the defined gear ratios to determine how much torque to apply to the wheels.
var GearRatio : float[];
var CurrentGear : int = 0;

// These variables are just for applying torque to the wheels and shifting gears.
// using the defined Max and Min Engine RPM, the script can determine what gear the
// car needs to be in.
var EngineTorque : float = 600.0;
var MaxEngineRPM : float = 3000.0;
var MinEngineRPM : float = 1000.0;
private var EngineRPM : float = 0.0;



function Start () {
	// I usually alter the center of mass to make the car more stable. I'ts less likely to flip this way.
	GetComponent.<Rigidbody>().centerOfMass.y = -1.5;
}	

function LateUpdate () {


	// This is to limith the maximum speed of the car, adjusting the drag probably isn't the best way of doing it,
	// but it's easy, and it doesn't interfere with the physics processing.
	GetComponent.<Rigidbody>().drag = GetComponent.<Rigidbody>().velocity.magnitude / 250;
	
	// Compute the engine RPM based on the average RPM of the two wheels, then call the shift gear function
	EngineRPM = (FrontLeftWheel.rpm + FrontRightWheel.rpm)/2 * GearRatio[CurrentGear];
	ShiftGears();

	// set the audio pitch to the percentage of RPM to the maximum RPM plus one, this makes the sound play
	// up to twice it's pitch, where it will suddenly drop when it switches gears.
	GetComponent.<AudioSource>().pitch = Mathf.Abs(EngineRPM / MaxEngineRPM) + 1.0 ;
	// this line is just to ensure that the pitch does not reach a value higher than is desired.
	if ( GetComponent.<AudioSource>().pitch > 2.0 ) {
		GetComponent.<AudioSource>().pitch = 2.0;
	}

	// finally, apply the values to the wheels.	The torque applied is divided by the current gear, and
	// multiplied by the user input variable.
	FrontLeftWheel.motorTorque = EngineTorque / GearRatio[CurrentGear] * Input.GetAxis("Vertical");
	FrontRightWheel.motorTorque = EngineTorque / GearRatio[CurrentGear] * Input.GetAxis("Vertical");
		
	// the steer angle is an arbitrary value multiplied by the user input.
	FrontLeftWheel.steerAngle = 25 * Input.GetAxis("Horizontal");
	FrontRightWheel.steerAngle = 25 * Input.GetAxis("Horizontal");
	
	//checkLightsAndCars() ;
	
	if (Input.GetKeyDown ("space")){
		//Debug.Log ("SPACE key is held down");
			//EngineTorque  = 0.0;
			FrontRightWheel.brakeTorque = 999;
			FrontLeftWheel.brakeTorque = 999;
			}else{
			FrontRightWheel.brakeTorque = 0;
			FrontLeftWheel.brakeTorque = 0;
	}
}



function ShiftGears() {
	// this funciton shifts the gears of the vehcile, it loops through all the gears, checking which will make
	// the engine RPM fall within the desired range. The gear is then set to this "appropriate" value.
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

	function checkLightsAndCars() : System.Boolean {
	var hit : RaycastHit;
	var distance : float = 20;
	//DrawRay 10 forward	
	var forward = transform.TransformDirection(Vector3.forward);
	Debug.DrawRay(transform.position, forward * 20, Color.green);
	
	if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit, distance)) { //Define the raycast and check if it has hit anything
			
			//if(hit.collider.transform.name == "Collider2") { //Did we hit the gameObject called "StopArea"
				Debug.Log(hit.collider.transform.name);
			//}
		}else{ //We haven't hit anything that will stop us moving
		Debug.Log("walang sabit");
			
	}
	
}

//~ function instantiateAICar() : System.Boolean {
	//~ var hit : RaycastHit;
	//~ var distance : float = 30;
	//~ var forward = transform.TransformDirection(Vector3.forward);
	//~ Debug.DrawRay(transform.position, forward * 30, Color.green);
	
	//~ if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit, distance)) { //Define the raycast and check if it has hit anything
			
			//~ if(hit.collider.transform.name == "Trigger") { //Did we hit the gameObject called "StopArea"
				//~ Debug.Log(hit.collider.transform.name);
				//~ var instance : GameObject = Instantiate(Resources.Load("AICar pref"));
			//~ //}
			//~ }else{ //We haven't hit anything that will stop us moving
			//~ Debug.Log("walang Ai");
			
	//~ }
	
//~ }

