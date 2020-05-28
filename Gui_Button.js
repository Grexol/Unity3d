//attach to player collider

var locationTrans : Transform;

function Start(){
	 locationTrans  =  GameObject.Find("Locations").transform;
}	
// Draws a text field and when it gets modified prints a message
var tranSearch : String = "";

function OnGUI () {
// Make a text field that modifies stringToEdit.
tranSearch = GUI.TextField (Rect (10, 10, 100, 20), tranSearch , 25);
if (GUI.changed)
		var children : Array [];		
		children = new Array();
		for(var child : Transform in  locationTrans.GetComponentsInChildren(Transform)) {
		//Debug.Log(child);
			if (child.name == tranSearch){
				Debug.Log(child.name + " found" ); 
			}else{
				//Debug.Log( " NOT found" );
			}
		}

}


/* 
var icon : Texture;

function OnGUI () {
if(!icon) {
Debug.LogError("Add a texture on the inspector first");
return;
}
GUI.Button (Rect (0, 0, 100, 20), GUIContent (icon));
}
 */

/* // The position on of the scrolling viewport
var scrollPosition : Vector2 = Vector2.zero;

function OnGUI () {
// An absolute-positioned example: We make a scrollview that has a really large client
// rect and put it in a small rect on the screen.
scrollPosition = GUI.BeginScrollView (Rect (10,300,100,100),
scrollPosition, Rect (0, 0, 220, 200));

// Make four buttons - one in each corner. The coordinate system is defined
// by the last parameter to BeginScrollView.
GUI.Button (Rect (0,0,100,20), "Top-left");
GUI.Button (Rect (120,0,100,20), "Top-right");
GUI.Button (Rect (0,180,100,20), "Bottom-left");
GUI.Button (Rect (120,180,100,20), "Bottom-right");

// End the scroll view that we began above.
GUI.EndScrollView ();
}
 */



/*  // Draws 2 buttons, one with an image, and other with a text
// And print a message when they got clicked.
var btnTexture : Texture;
function OnGUI() {
if (!btnTexture) {
Debug.LogError("Please assign a texture on the inspector");
return;
}
if (GUI.Button(Rect(10,10,50,50),btnTexture))
Debug.Log("Clicked the button with an image");
if (GUI.Button(Rect(10,70,50,30),"Click"))
Debug.Log(GUI.Button);

//Instantiate (prefab);


}  */





