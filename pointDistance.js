// attach to points
@HideInInspector
var other : Transform;
var delt : int = 0;
var cubelimit :int=0;

function Start(){
	other = GameObject.Find("AiSphere").transform;
}

function Update() {
var aiDist = (other.position - transform.position).magnitude;   //sqrMagnitude;

	if (aiDist <13) {
		createCube();	
			Destroy(gameObject);	
		}else{
			delt = Time.deltaTime;
			cubelimit= 0;
	}			
	if (cubelimit == 1) {  
		this.enabled =false;
		delt = Time.deltaTime;
	}
	//this.enabled = false;
	
}


function createCube(){
		delt ++;
		if (delt == 1) { 
			newpoint = GameObject.CreatePrimitive(PrimitiveType.Cube).transform;	
			// var newpointname :String = "" ;
			newpoint.transform.gameObject.name = transform.name;
			newpoint.transform.gameObject.tag = transform.gameObject.tag;
			newpoint.transform.position= transform.position;	
			newpoint.transform.rotation = transform.rotation;
			newpoint.transform.localScale = Vector3(3,3,3);
			newpoint.transform.position = Vector3(transform.position.x,transform.position.y,transform.position.z);
			//newpoint.gameObject.AddComponent ("BoxCollider");
			newpoint.GetComponent.<Collider>().isTrigger = true;
			cubelimit ++;
			delt = Time.deltaTime;			
	}
}