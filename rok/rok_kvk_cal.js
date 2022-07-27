let power = 0
let norma = 0

function calc_norma(){
    power = document.getElementById("power").value
    norma = (power - 25*10**6)*5
    if(norma < 0 ){
        alert("エラー: 2500万未満は対象ではありません")
    }else if(norma > 2 * 10**9){
        alert("桁数を間違えていませんか？")
        document.getElementById("norma_point").textContent = norma/1000 + "万"
    }else{
        document.getElementById("norma_point").textContent = trans_junit(norma)
    }
    document.getElementById("T5_kill").textContent = "？？"
    document.getElementById("T5_death").textContent ="？？"
}

function simulate(){
    let T5_kill = norma / 20
    let T5_death = norma / 200
    document.getElementById("T5_kill").textContent = trans_junit(T5_kill)
    document.getElementById("T5_death").textContent = trans_junit(T5_death)
}

function trans_junit(a){
    const score = a
    let hundred_million = ""
    let ten_thousand = ""
    if (score/10**8 > 0){
        hundred_million = Math.floor(score/(10**8))
    }
    if (score/10**5 > 0){
        var tmp = score - hundred_million*10**8
        ten_thousand = Math.ceil(tmp/(10**4))
        
    }

    hundred_million = junit_formater(hundred_million+"億")
    ten_thousand = junit_formater(ten_thousand+"万")
    
    return hundred_million + ten_thousand 
}

function junit_formater(a){
    if (a[0] == 0){
        a = ""
    }
    return a
}