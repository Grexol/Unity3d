// by Grexol  
var spawnDist : int = 0;													//attach to waypoint Z  -- by Serigrapher11
var delt : int = Time.deltaTime;
//~ var pos : Vector3 = transform.position;
var carLimit :int=0;
var camPos : Transform ;
var isHit :boolean = false; 

function Update() {

  camPos  = GameObject.Find("CamSphere").transform;
	HitCamera();	
	spawnDist  = (camPos .position - transform.position).magnitude;   //sqrMagnitude;
	if (isHit == true){		
			InstantiateCar();	
			//InstantiateTryk();			
		}else{
			delt = Time.deltaTime;
			carLimit= 0;
	}
		if (carLimit == 2) {              //?????
			delt = Time.deltaTime;
		}					
}

function HitCamera(){
var relativePos = camPos.position - transform.position; // Debug purpose
var rotate = Quaternion.LookRotation(relativePos);
transform.rotation = rotate;
	var forward = transform.TransformDirection(Vector3.forward);
	Debug.DrawRay(transform.position, forward * 80, Color.green);
	var hit : RaycastHit;
	var hitDistance : float = 80;
	if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit, hitDistance)) { 		
		if(hit.collider.transform.name == "CamSphere" ) { 	
			isHit = true;
	//		Debug.Log("Cam hit by CAR wp");
			}else{
			isHit = false;
	//		Debug.Log("");
		}
	}
}

//~ function InstantiateCar() {
	//~ delt ++;
	//~ if (delt == 100) { // 50 
		//~ var AICarInstance : GameObject = Instantiate(Resources.Load("AICar&Waypoint"), Vector3(   
														//~ pos.x, pos.y , pos.z), Quaternion.identity);
		//~ AICarInstance.transform.position = transform.position;												
		//~ AICarInstance.transform.LookAt(transform);
		
		//~ carLimit ++;
		//~ delt = Time.deltaTime;						
	//~ }
//~ }

function InstantiateCar() {
	var pos : Vector3 = transform.position;
	delt ++;
	
	if (delt == 100) { // 50 
		var AICarInstance : GameObject = Instantiate(Resources.Load("AICar&Waypoint"), Vector3(   
														pos.x, pos.y , pos.z), Quaternion.identity);
		AICarInstance.transform.position = transform.position;												
		AICarInstance.transform.LookAt(transform);
		
		carLimit ++;
		delt = Time.deltaTime;	
	}

}



 //~ function InstantiateTryk() {
	//~ delt ++;
	//~ if (delt == 100) { // 50 
		//~ var TrykInstance : GameObject = Instantiate(Resources.Load("TrykwithVercetti"), Vector3(   
														//~ pos.x, pos.y , pos.z), Quaternion.identity);
		//~ TrykInstance.transform.position = transform.position;												
		//~ TrykInstance.transform.LookAt(transform);
		//~ carLimit ++;
		//~ delt = Time.deltaTime;						
	//~ }
//~ }

