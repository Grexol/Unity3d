var fakeParent : Transform;

private var parentOriginP : Vector3;
private var isPretending = false;
private var childOriginP : Vector3;

function Update(){

    if (isPretending){
        var positionChange = fakeParent.position - parentOriginP;
        transform.position = childOriginP + positionChange;
    }    

}



function StartPretending(){ //call this when you want to pseudoparent.
    childOriginP = transform.position;
    parentOriginP = fakeParent.position;
	print(transform.parent);
    isPretending = true;
}
