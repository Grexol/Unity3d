function Update () {


var forward = transform.TransformDirection(Vector3.forward);
Debug.DrawRay(transform.position, forward * 10, Color.red);

var hits : RaycastHit[];
hits = Physics.RaycastAll (transform.position, transform.forward, 10.0);
// Change the material of all hit colliders
// to use a transparent Shader
for (var i = 0;i < hits.Length; i++) {
var hit : RaycastHit = hits[i];
var renderer = hit.collider.GetComponent.<Renderer>();
if (renderer) {
renderer.material.shader = Shader.Find("Transparent/Diffuse");
renderer.material.color.a = 0.3;

}
}
}