function kai(){
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;

  var x = b*b - 4*a*c;
  var x1 = Math.sqrt(x);
  var y = (-1*b + x1)/(2*a);
  var y1 = (-1*b - x1)/(2*a);

  if (x < 0){
    document.getElementById("ans1").textContent = "エラー";
    document.getElementById("ans2").textContent = "虚数が出てきます。";
  }else if (x == 0){
    document.getElementById("ans1").textContent = y;
    document.getElementById("ans2").textContent = "重解です";
  }else{
    document.getElementById("ans1").textContent = y;
    document.getElementById("ans2").textContent = y1;

  }

}
