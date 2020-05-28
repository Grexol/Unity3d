 // A simple smooth follow camera,
// that follows the targets forward direction

var targets : Transform;
var faceCam : Transform;
var smooth = 0.3;
var distance = 0.01;
private var yVelocity = 0.0;

function Start(){

faceCam  = GameObject.Find("MainCamera").transform; 
}

function Update () {
// Damp angle from current y-angle towards target y-angle
var yAngle : float = Mathf.SmoothDampAngle(transform.eulerAngles.y,
targets.eulerAngles.y, yVelocity, smooth);
// Position at the target
var position : Vector3 = targets.position;
// Then offset by distance behind the new angle
position += Quaternion.Euler(0, yAngle, 0) * Vector3 (0, 0, -distance);
// Apply the position
transform.position = position;

// Look at the target
transform.LookAt(faceCam);
} 



/* //attach to vehicle Cube collider

//~ function OnMouseOver () {
//~ renderer.material.color -= Color(0.1, 0, 0) * Time.deltaTime;



//~ }
var objectToFollow : Transform ;	
//~ var isEnter :boolean =false;

@HideInInspector
var AiPos : Transform ; 

function Start(){

AiPos  = GameObject.Find("MainCamera").transform; 
	
	var myParent :Transform = gameObject.transform.parent;
	//Debug.Log(myParent);
	var children : Array [];		
	children = new Array();
	for(var child : Transform in myParent.GetComponentsInChildren(Transform)) {
		if (child.name == "Bike_122111"){
			objectToFollow= child.transform;
		}
	}
}

function Update() {

	//AiPos  = GameObject.Find("AiSphere").transform; 
	var relativePos2 = AiPos.position - transform.position; // Debug purpose
	var rotate2 = Quaternion.LookRotation(relativePos2);
	transform.rotation = rotate2;	


   transform.position = objectToFollow.TransformDirection(Vector3.up) + objectToFollow.position * Time.deltaTime;
      transform.position =  objectToFollow.position;

   //transform.rotation = objectToFollow.rotation;
}
 */















/* //~ function OnMouseDown () {
	//~ isEnter=true;
	//Time.timeScale = 0.01;
//~ }
//~ var windowRect : Rect = Rect (Input.mousePosition.x, Input.mousePosition.y, 120, 50);
var windowRect : Rect = Rect (20, 20, 120, 50);
//~ var windowRect : Rect ;
function OnGUI () {

	//if (Input.GetKeyDown ("return")){

	 
		//if (isEnter == true){
			windowRect = GUI.Window (0, windowRect, DoMyWindow, "Tigil muna!");
		//Time.timeScale = 0.01;
		//}	
	//}	
}

function DoMyWindow (windowID : int) {
if (GUI.Button (Rect (10,20,100,20), "Sige hala!"))
	Time.timeScale = 0.1; 
	isEnter=false;
}
 */
