/*  var isDead = false;

function OnGUI()
{
    if (isDead)
    {
        GUI.Box(Rect(left, top, width, height), "You're dead");
        if(GUI.Button(Rect(left, top, width, height), "Click here"))
        {
            isDead = false;
        }
    }
}

function die()
{
    if(hitpoints <= 0)
        isDead=true;
}








var showGUI : boolean = false ;
 
function OnTriggerEnter(hit : Collider){
   if(hit.gameObject.tag == "PathHitter"){
   showGUI = true ;
   }
}
 
function OnTriggerExit(hit : Collider){
   if(hit.gameObject.tag == "PathHitter"){
   showGUI = false ;
   }
}
 
function OnGUI(){
			
   if(showGUI){
        //do what you're doing with gui.. making your box or whatever
   }
}
 //*/ 