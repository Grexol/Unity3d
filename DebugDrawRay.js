
function Update () {

var forward = transform.TransformDirection(Vector3.forward);

Debug.DrawRay(transform.position, forward * 10, Color.green);

if(Physics.Raycast(transform.position, forward, 10)) {
	Debug.Log("Tama");
	}

}