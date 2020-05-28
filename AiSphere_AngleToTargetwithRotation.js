// prints "close" if the z-axis of this transform looks
// almost towards the target
// edited by Grexol -CTTO of original
@HideInInspector
var cubePos : Transform ; 

var targetcube : Transform;

function Start(){
	targetcube = GameObject.Find("CubeLocation").transform; 
}

function Update () {
	//LookTarget();
var targetDir = targetcube.position - transform.position;
var forwards = transform.forward;
var angulo = Vector3.Angle(targetDir, forwards);
	if (angulo < 5.0){
		print(angulo +" close to " + targetcube);
		}else{
//		print(angle );
	}
}

function LookTarget(){
	var relativePos = targetcube.position - transform.position; // Debug purpose
	var lingon = Quaternion.LookRotation(relativePos);
	transform.rotation = lingon;		
}  
