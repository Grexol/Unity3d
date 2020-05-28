var target : Transform;

function Update () {
var screenPos : Vector3 = GetComponent.<Camera>().WorldToScreenPoint (target.position);
print ("target is " + screenPos.x + " pixels from the left");
GetComponent.<GUITexture>().pixelInset = Rect (screenPos.x, screenPos.y, 100, 100); 
}