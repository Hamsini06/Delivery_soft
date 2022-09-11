function change(){
  var value = document.getElementById("chk");
  if(value.checked){
    document.getElementById("txt").style.display = "block";
  }
  else{
    document.getElementById("txt").style.display = "none";
  }
}

function chg(){
  alert("delivery confirmed");
}
