function Update () {
}

//OnMouseDown is called when the user has pressed the mouse button while over the GUIElement or Collider.
function OnMouseDown(){
	Debug.Log("Mouse Down");
	this.transform.Rotate(0,0,10); //flip the turtle
//}

//OnMouseUp is called when the user has released the mouse button.
//function OnMouseUp(){
//	this.transform.Rotate(0,0,-1); //flip the turtle
	
}