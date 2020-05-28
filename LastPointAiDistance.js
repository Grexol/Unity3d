//Attach to Last Point

//@HideInInspector
var other : Transform;

var AiDistance : int = 0.0;

function Start(){
other = GameObject.Find("AiSphere").transform;
}

function Update() {
	var destroyDist = (other.position - transform.position).magnitude;   //sqrMagnitude;
	if (AiDistance <3) {
		print("Touching AiSphere");
		//Destroy(gameObject);
	}else{
		//~ gameObject.enabled = true;
	}


}


function findFirstPoint(){

var myParent : Transform = transform.parent;
	var children : Array [];		
	children = new Array();
	for(var child : Transform in myParent.GetComponentsInChildren(Transform)) {
		if (child.gameObject.active == true){
			print ( "child " + child.name + " is active");
					//~ child.gameObject.active = true;	
					
		}
		
	}	
}