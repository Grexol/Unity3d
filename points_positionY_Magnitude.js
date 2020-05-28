// attach to points
// edited by Grexol -CTTO of original

function OnDrawGizmos(){	
	transform.position = Vector3(transform.position.x,-3,transform.position.z);
}


@HideInInspector
var other : Transform;
var delt : int = 0;
var cubelimit :int=0; 

function Start(){
	//gameObject.AddComponent ("points_positionY_Magnitude_2");
	other = GameObject.Find("AiSphere").transform;
}

function Update() {
var aiDist = (other.position - transform.position).magnitude;   //sqrMagnitude;

	if (aiDist <20) {
		// add condition
		createCube();	
	}else{
			delt = Time.deltaTime;
			cubelimit= 0;
	}			
	if (cubelimit == 1) { 
		this.enabled =false;
		delt = Time.deltaTime;
	}
	
}


function createCube(){
		delt ++;
		if (delt == 1) { 
			//newpoint = GameObject.CreatePrimitive(PrimitiveType.Cube).transform;
			var newpoint : Transform = GameObject.Instantiate(Resources.Load("PathPointCube")).transform;
				
			// var newpointname :String = "" ; 
			newpoint.transform.gameObject.name = transform.name;
			newpoint.transform.gameObject.tag = transform.gameObject.tag;
			newpoint.transform.position= transform.position;	
			newpoint.transform.rotation = transform.rotation;
			newpoint.transform.localScale = Vector3(3,3,3);
			newpoint.transform.position = Vector3(transform.position.x,transform.position.y,transform.position.z);
			//newpoint.gameObject.AddComponent ("BoxCollider");
			//newpoint.transform.renderer.enabled = false;
			//var kulay : Color = Color.white;
			//newpoint.transform.renderer.material.color.a = 80;
			newpoint.GetComponent.<Collider>().isTrigger = true;
			
			cubelimit ++;
			delt = Time.deltaTime;			
	}
}




