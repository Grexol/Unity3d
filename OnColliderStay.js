/* 

function OnCollisionStay(collision : Collision) {
// Check if the collider we hit has a rigidbody
// Then apply the force
for (var contact : ContactPoint in collision.contacts) {
//~ print(contact.thisCollider.name + " hit " + contact.otherCollider.name);
print(contact.thisCollider.name + " hit " + contact.otherCollider.name);
// Visualize the contact point
Debug.DrawRay(contact.point, contact.normal, Color.white);
}
} */


//~ function OnTriggerEnter (other : Collider) {
//~ Destroy(other.gameObject);
//~ }


//~ private var lastCollider : Collider;

//~ function OnCollisionEnter(collisionInfo : Collision ) {
//~ lastCollider = collisionInfo.collider;
//~ print(lastCollider);
//~ }

function OnCollisionEnter(other: Collision){
//if (other.gameObject.tag =='point')
	print(other.gameObject.name);
}
