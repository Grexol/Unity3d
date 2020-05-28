@HideInInspector
var other : Transform;

function Start(){
	other = GameObject.Find("AiSphere").transform;
}

function Update() {

var aiDist = (other.position - transform.position).magnitude;   //sqrMagnitude;

	if (aiDist >10 && aiDist <20) {
		//GetComponent("points_positionY_Magnitude").enabled = true;
	}	
	if (aiDist >20) {
		//GetComponent("points_positionY_Magnitude").enabled = false;
	}	
}
