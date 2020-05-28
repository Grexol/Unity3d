

function FixedUpdate() {

	var hit : RaycastHit;
	if (Physics.Raycast( Camera.main.ScreenPointToRay(Input.mousePosition),  hit, 1000)) {
	
	Debug.Log("Name: " + hit.transform.name + " ID: " + hit.transform.GetInstanceID());
	//	return; 
	//hit.transform.name = "Hello";

	}
	
	
	//~ var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
//~ if (Physics.Raycast (ray, 100)) {
//~ print (ray);
//~ }
	
	
}

