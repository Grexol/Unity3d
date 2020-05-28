// attach to O point and attach Waypoint_Gizmos_&_RotationLookAt.js to its parent   --by Serigrapher0112
	
function OnDrawGizmos(){	

	var myParent : Transform = transform.parent;
	for(var child : Transform in myParent.GetComponentsInChildren(Transform)) {
		 if (child.name == "0" ){
			 relativepos0to1  = transform.position- child.transform.position  ; 	 
			 rotate0 = Quaternion.LookRotation(relativepos0to1);
			transform.rotation = rotate0;
		}
	}
}