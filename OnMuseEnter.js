
// Attach this script to a mesh to make
// it red when the mouse is over the mesh

function OnMouseEnter () {
GetComponent.<Renderer>().material.color = Color.red;
}