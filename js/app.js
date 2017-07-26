//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/




var hElem = document.getElementsByClassName("name");
for(var i = 0; i<hElem.length; i++){
	hElem[i].addEventListener("click", showItem);
}
function showItem(){
  var priceElem = this.querySelector(".menu");
  if(priceElem.style.display === "none"){
    priceElem.style.display = "block";
  }else{
    priceElem.style.display = "none";
  }
  }

