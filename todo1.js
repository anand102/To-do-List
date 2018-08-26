var input= prompt("Enter your choice? ");
 
 var list=["Apple"]


while(input !=="exit"){
	
  if(input=="show"){
  	showData();
  }
  else if(input=="new"){
  	newData();
  }
 else if (input=="delete"){
 	delData();
 }
    input= prompt("Enter your choice? ")
}
console.log("You are going to exit application")

function showData(){
	console.log("************");
  	list.forEach(function(todo, i){  		
  	console.log(i+ ": " +todo);
  	});
  	console.log("************");
}


function newData(){
	var newList=  prompt("Enter some data...");
    list.push(newList)
    alert("New Item added in the list.")
}

function delData(){
	var del=  prompt("Which Index item you want to delete? ");
 	list.splice(del,1);
 	console.log("Item deleted");
 	
}