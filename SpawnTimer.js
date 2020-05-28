//attach to waypoint Z  -- by Serigrapher11
// edited by Grexol  
var other : Transform;
other = GameObject.Find("CamSphere").transform;
other.hideFlags = HideFlags.NotEditable;
var spawnDist : int = 0;
var delt : int = Time.deltaTime;
var pos : Vector3 = transform.position;
var carLimit :int=0;

var camPos : Transform = GameObject.Find("CamSphere").transform;
camPos.hideFlags = HideFlags.NotEditable;
  
function Update() {
	  spawnDist  = (other.position - transform.position).magnitude;   //sqrMagnitude;
	  Debug.Log("spawnDist  " + spawnDist );
		if(spawnDist > 50 ) {
			InstantiateCar();
			}else{
			delt = Time.deltaTime;
			carLimit= 0;
		}		
		if (carLimit > 3) {              //?????
			//this.enabled =false;
			delt = Time.deltaTime;
		}
		
		
	var forward = transform.TransformDirection(Vector3.forward);
	Debug.DrawRay(transform.position, forward * 50, Color.green);
	var hit : RaycastHit;
	var hitDistance : float = 50;
	if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit, hitDistance)) { 	
	
		if(hit.collider.transform.name == "CamSphere" ) { 		
		Debug.Log("CamSphere was HIT");
		}
	}
var relativePos = camPos.position - transform.position; // Debug purpose
var rotate = Quaternion.LookRotation(relativePos);
transform.rotation = rotate;
			
}


function InstantiateCar() {
	delt ++;
	if (delt == 100) { // 50 
		var AICarInstance : GameObject = Instantiate(Resources.Load("AICar&Waypoint"), Vector3(   
														pos.x, pos.y , pos.z), Quaternion.identity);
		AICarInstance.transform.LookAt(transform);
		carLimit ++;
		//Debug.Log("carLimit " + carLimit);
		delt = Time.deltaTime;
		//Debug.Log("delt  " + delt );							
	}
}

