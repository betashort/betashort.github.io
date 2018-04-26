function al(){
  window.alert("警告！！");
}

function al2(){
  if(window.confirm("こんにちは")){
    document.getElementById('con').textContent = "OK";
  }else{
    document.getElementById('con').textContent ="";
  }
}

function al3(){
  while(true){
    var st = (window.prompt("yes or no"));
    if (st == "yes"){
      document.getElementById('con').textContent = "yes";
      break;
    }else if (st == "no"){
      document.getElementById('con').textContent = "no";
      break;
    }
 }
}
