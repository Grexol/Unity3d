var target : Transform;

function Update () {
if (!Physics.Linecast (transform.position, target.position)) {
//ProcessData.AndDoSomeCalculations();
	Debug.Log("true, there is collider intersecting the line between start and end.");
}
}