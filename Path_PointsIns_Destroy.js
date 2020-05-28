//Attach to Cube points
//by Grexol

//@HideInInspector
var other : Transform;
var instans : Transform;
var AiDistance : int = 0.0; 

var closestDist = Mathf.Infinity; 

function Start(){
other = GameObject.Find("AiSphere").transform;

}

function Update() {
		
	var destroyDist = (other.position - transform.position).magnitude;   //sqrMagnitude;
	if (destroyDist >20) {
		Destroy(transform.gameObject);
	}else{
	}
	
} 







//~ function OnCollisionStay(collidor: Collider) {
	//~ print(collidor.name);
//~ }



	//~ pathParent= GameObject.Find("Paths").transform;
	//~ for(var child : Transform in pathParent.GetComponentsInChildren(Transform)) {
		//~ print(child.name + "==" + transform.name);
		 //~ if (child.name==transform.name){
			//~ var startDist = (child.transform.position - transform.position).magnitude;  
			//~ if (startDist <1) {
			//~ Destroy(child.transform.gameObject);  // destroy all nearest cube clones
			//~ }
		 //~ }
	//~ }
	
	//~ function OnTriggerEnter (other : Collider) {
	//~ print(other.gameObject.name +"==" + transform.name);
	//~ if(other.gameObject.name == transform.name){ 
		//~ Destroy(other.gameObject);
	//~ }
//~ }
