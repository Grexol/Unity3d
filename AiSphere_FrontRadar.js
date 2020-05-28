// edited by Grexol -CTTO of original
var spawnPoints : Transform;
private var waypoint = new Array();
private var mesafe:float;
private var sayac: int=0;

function Start(){

	var i = 0;
	for (var child:Transform in spawnPoints) {
		waypoint[i] = child;
		i ++;
	}
}


function Update(){

	mesafe = Vector3.Distance(transform.position,waypoint[sayac].position);
	//transform.LookAt(waypoint[sayac].position;
	var relativePos = waypoint[sayac].position-transform.position;
	var rotations = Quaternion.LookRotation(relativePos);
	transform.rotation = Quaternion.Slerp(transform.rotation,rotations,Time.deltaTime *7);
	transform.Translate(Vector3.forward/4) ;
	
	
	
	
	
	
	if (mesafe <= 1){
		sayac ++ ;
	}
		if (sayac>=waypoint.length){
			sayac=0;
		}
}		

