// Prints the name of the object camera is directly looking at

function Update () {
// Get the ray going through the center of the screen
var ray : Ray = GetComponent.<Camera>().ViewportPointToRay (Vector3(0.5,0.5,0));
// Do a raycast
var hit : RaycastHit;
if (Physics.Raycast (ray, hit))
//~ print ("I'm looking at " + hit.transform.name);
//~ else
//~ print ("I'm looking at nothing!");

var ray2 : Ray = GetComponent.<Camera>().ScreenPointToRay (Vector3(300,300,0));
Debug.DrawRay (ray2.origin, ray.direction * 10, Color.white);


}