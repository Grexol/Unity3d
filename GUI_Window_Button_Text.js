//attach to vehicle Cube collider || BikeCatcher
// edited by Grexol  
var isEnter :boolean =false;
var windowRect : Rect;
var tranSearch : String ;
var locationTrans : Transform;
function Start(){
	 locationTrans  =  GameObject.Find("CubeLocation").transform;
}	
var screenPos : Vector3 ;
function Update () {
screenPos  = GetComponent.<Camera>().WorldToScreenPoint (transform.position);
print ("I am  " + screenPos.x + " pixels from the left");
}
function OnMouseOver () {
	Time.timeScale = 0.01;
	 isEnter=true;
 }
 
 function OnMouseExit () {
	Time.timeScale = 0.01;
	 isEnter=true;
 }
var doWindow0 : boolean = true;
var found :boolean = false;
function DoWindow0 (windowID : int) {
	tranSearch = GUI.TextField (Rect (10, 20, 100, 20), tranSearch , 25);
		if (GUI.changed){
		for(var child : Transform in  locationTrans.GetComponentsInChildren(Transform)) {
		Debug.Log(tranSearch );
			if (child.name == tranSearch){
				found  = true;
				}else{
				Debug.Log( " NOT found" );
			}
		}
	}
}
function OnGUI () {
	if (isEnter == true){		
		if (doWindow0)
		GUI.Window (0, Rect ( 150, 150,120,60), DoWindow0, "Saan Tayo"); // 160, 170
		if (found == true){
			if (GUI.Button (Rect (160 ,220,100,20), "Sige drive!")){
				// do hide window
			}
		}		
		
	}		
}
