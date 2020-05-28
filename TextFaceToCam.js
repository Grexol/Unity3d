//by Serigrapher11

// attatch to TextMesh

var camTrans : Transform;
camTrans = GameObject.Find("MainCamera").transform;
camTrans.hideFlags = HideFlags.NotEditable;
//var zTxt = GameObject.Find("ZText");

function Update () {

var relativePos = camTrans.position - transform.position; // Debug purpose
var rotate = Quaternion.LookRotation(-relativePos);
transform.rotation = rotate;

//var zSpawn = GameObject.Find("Z");
//var stDist = zSpawn.GetComponent("SpawnTimer").delt ;

//Debug.Log(stDist);
//TextMesh.text = stDis.ToString;

}


/* function OnMouseDown () {


	Debug.Log(GetComponent(TextMesh).alignment);

	
} */