var windowRect : Rect = Rect (20, 20, 120, 50);
var hSliderValue : float = 0.5;


function OnGUI () {
// Register the window. Notice the 3rd parameter
	windowRect = GUILayout.Window (0, windowRect, DoHelloWindow, "My Window");
}


function DoHelloWindow (windowID : int) {

	if (GUILayout.Button ("Hello World")) // This button will size to fit the window
	print ("Got a click");

	hSliderValue = GUILayout.HorizontalSlider (hSliderValue, 0.0, 10.0);
	GUILayout.Label("This text makes just space");
}