// Make the script also execute in edit mode.
@script ExecuteInEditMode()

// Just a simple script that looks at the target transform.
var target : Transform;
function Update () {
if (target)
transform.LookAt(target);
} 


//~ // Instantiates a project after 2 seconds when Space key was pressed
//~ // and it will only call the function after the function has ended its execution

//~ var projectile : Rigidbody;

//~ function Update() {
//~ if(Input.GetKeyDown(KeyCode.Space) && !IsInvoking("LaunchProjectile"))
//~ Invoke("LaunchProjectile", 2);
//~ }

//~ function LaunchProjectile () {
//~ var instance : Rigidbody = Instantiate(projectile);
//~ instance.velocity = Random.insideUnitSphere * 5;
//~ }


// In this example we show how to invoke a coroutine using a string name and stop it

//~ function Start () {
//~ StartCoroutine("DoSomething", 2.0);
//~ yield WaitForSeconds(1);
//~ StopCoroutine("DoSomething");
//~ }

//~ function DoSomething (someParameter : float) {
//~ while (true) {
//~ print("DoSomething Loop");
//~ // Yield execution of this coroutine and return to the main loop until next frame
//~ yield;
//~ }
//~ }


// In this example we show how to invoke a coroutine and continue executing
// the function in parallel.

//~ function Start() {
//~ // - After 0 seconds, prints "Starting 0.0"
//~ // - After 0 seconds, prints "Before WaitAndPrint Finishes 0.0"
//~ // - After 2 seconds, prints "WaitAndPrint 2.0"
//~ print ("Starting " + Time.time);
//~ // Start function WaitAndPrint as a coroutine. And continue execution while it is running

//~ // this is the same as WaintAndPrint(2.0) as the compiler does it for you automatically
//~ StartCoroutine(WaitAndPrint(2.0));
//~ print ("Before WaitAndPrint Finishes " + Time.time);
//~ }

//~ function WaitAndPrint (waitTime : float) {
//~ // suspend execution for waitTime seconds
//~ yield WaitForSeconds (waitTime);
//~ print ("WaitAndPrint "+ Time.time);
//~ }