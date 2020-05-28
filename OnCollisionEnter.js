// Detects approaching playercar
// attach to waypoint block

function OnCollisionEnter(collision : Collision) {
// Debug-draw all contact points and normals
for (var contact : ContactPoint in collision.contacts) {
Debug.DrawRay(contact.point, contact.normal, Color.white);
}

// Play a sound if the coliding objects had a big impact.
if (collision.relativeVelocity.magnitude > 4)

	//var Carprefab : GameObject;
	
	var AICarInstance : GameObject = Instantiate(Resources.Load("New CarAI Prefab"));
	
	//transform.parent = AICarInstance.transform;
	//TODO:
	//~ var newcontainer = GameObject;
    //~ AICarInstance.parent = newcontainer;
	
}