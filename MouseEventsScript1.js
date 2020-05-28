function Update () {
}
var increment: float = 0;

//Record the starting location for the cube
var startingPoints: Vector3; 
startingPoints = Vector3(transform.position.x,transform.position.y,transform.position.z);

//OnMouseEnter is called when the mouse entered the GUIElement or Collider.
function OnMouseEnter(){
	Debug.Log("Mouse Enter");
}
	
//OnMouseExit is called when the mouse is not any longer over the GUIElement or Collider.
function OnMouseExit(){
	Debug.Log("Mouse Exit");
	transform.position = (startingPoints); //move the cube back to where it started
}

//OnMouseOver is called every frame while the mouse is over the GUIElement or Collider.
function OnMouseOver(){
	Debug.Log("Mouse Over");
	increment = increment+0.0001;
	transform.position.x = transform.position.x + increment; //move the cube along x axis
}