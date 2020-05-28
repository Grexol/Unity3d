var rearWheelLeft : WheelCollider;
var rearWheelRight : WheelCollider;
var frontWheelLeft : WheelCollider;
var frontWheelRight : WheelCollider;
 
var wheelFL : Transform;
var wheelFR : Transform;
var wheelRL : Transform;
var wheelRR : Transform;
 
var steer_max = 20;
var motor_max = 10;
var brake_max = 100;
 
private var steer = 0;
private var forward = 0;
private var back = 0;
private var motor = 0;
private var brake = 0;
private var reverse = false;
private var speed = 0;
 
function Start() {

	GetComponent.<Rigidbody>().centerOfMass.y = -1.5;
}
 
function FixedUpdate () {
 
speed = GetComponent.<Rigidbody>().velocity.sqrMagnitude;
steer = Mathf.Clamp(Input.GetAxis("Horizontal"), -1, 1);
forward = Mathf.Clamp(Input.GetAxis("Vertical"), 0, 1);
back = -1 * Mathf.Clamp(Input.GetAxis("Vertical"), -1, 0);
 
if(speed == 0) {
if(back > 0) { reverse = true; }
if(forward > 0) { reverse = false; }
}
 
if(reverse) {
motor = -1 * back;
brake = forward;
} else {
motor = forward;
brake = back;
}
 
frontWheelLeft.motorTorque = motor_max * motor;
frontWheelRight.motorTorque = motor_max * motor;
frontWheelLeft.brakeTorque = brake_max * brake;
frontWheelRight.brakeTorque = brake_max * brake;
 
frontWheelLeft.steerAngle = steer_max * steer;
frontWheelRight.steerAngle = steer_max * steer;
wheelFL.localEulerAngles.y = steer_max * steer;
wheelFR.localEulerAngles.y = steer_max * steer;
 
wheelFR.Rotate(0, 0, frontWheelLeft.rpm * -6 * Time.deltaTime);
wheelFL.Rotate(0, 0, frontWheelRight.rpm * -6 * Time.deltaTime);
wheelRR.Rotate(0, 0, rearWheelLeft.rpm * -6 * Time.deltaTime);
wheelRL.Rotate(0, 0, rearWheelRight.rpm * -6 * Time.deltaTime);


if(Input.GetKeyDown(KeyCode.Space)) {
	NavigationStop();
	var aiscript = GetComponent("AICarA_Script_tweak");
	aiscript.enabled = true;	
	var t3rdP = GameObject.Find("3rd Person Controller");
	var t3dPScript = t3rdP.GetComponent("ThirdPersonController");
	t3dPScript.enabled = true;
	this.enabled = false;	
}


}


function NavigationStop() {

				steer  = 0.0;
				motor = 0;
				frontWheelLeft.brakeTorque = 3999;
				frontWheelRight.brakeTorque  = 3999;
				steer = 0;
				forward = 0;
				back = 0;
				motor = 0;
				brake = 0;
				reverse = false;
				speed = 0;

				var stopLight = GameObject.Find("CarlightBACK") ;
				stopLight.GetComponent.<Light>().intensity =0.5;	
				var cubeRenderL = GameObject.Find("cubeBACKL") ;
				cubeRenderL.GetComponent.<Renderer>().enabled = true;
				var cubeRenderR = GameObject.Find("cubeBACKR") ;
				cubeRenderR.GetComponent.<Renderer>().enabled = true;			

}