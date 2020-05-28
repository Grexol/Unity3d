// prints "close" if the z-axis of this transform looks
// almost towards the target

	var cubeLoc : Transform;


function Update () {

cubeLoc = GameObject.Find("CubeLocation").transform;


	var relativePos2 = cubeLoc .position - transform.position; // Debug purpose
	var rotate2 = Quaternion.LookRotation(relativePos2);
	transform.rotation = rotate2;	
	
	var forward = transform.TransformDirection(Vector3.forward);
	Debug.DrawRay(transform.position, forward * 15, Color.magenta);
/* var targetDir = relativePos2;
var forwards = transform.forward;
var angulo= Vector3.Angle(targetDir, forwards);
	if (angulo< 5.0){
		print(angulo+" close to CubeLocation"); 
		}else{
//		print(angle );
	} */
} 



function spherePos(posVar: Vector3) {
posVar = transform.position;
//Debug.Log(posVar);
}