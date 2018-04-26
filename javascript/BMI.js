function check(){
  var w = document.getElementById("weight").value;
  var h = document.getElementById("height").value;

  bmi = w / (h**2);

  document.getElementById("result").textContent = bmi;

  if (bmi < 18.5){
    var text = "痩せすぎです。";
  }else if (bmi < 25){
    var text = "普通です。維持しましょう！";
  }else if (bmi < 30){
    var text = "肥満(レベル1)です。もう少し痩せましょう！";
  }else if (bmi < 35){
    var text = "肥満(レベル2)です。少し痩せましょう！";
  }else if (bmi < 40){
    var text = "肥満(レベル3)です。痩せましょう！";
  }else if (bmi <45){
    var text = "肥満(レベル4)です。手遅れかもしれませんね。ファイト！";
  }else{
    var text = "あなたは、人間ではありません！"
  }
  document.getElementById("coment").textContent = text;
}
