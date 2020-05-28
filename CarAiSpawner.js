//by Grexol

function instantiateAICar() : System.Boolean {
	var hit : RaycastHit;
	var distance : float = 30;
	var forward = transform.TransformDirection(Vector3.forward);
	Debug.DrawRay(transform.position, forward * 30, Color.yellow);
	
	if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit, distance)) { //Define the raycast and check if it has hit anything
			
			if(hit.collider.transform.name == "ColliderB2") { //Did we hit the gameObject called "StopArea"
				Debug.Log(hit.collider.transform.name);
				var instance : GameObject = Instantiate(Resources.Load("AICar pref"));
			//}
			}else{ //We haven't hit anything that will stop us moving
			Debug.Log("walang Ai");
			
	}
	
}

}
