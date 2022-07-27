
window.onload = onLoad;

function onLoad() {
    //今日
    var today = new Date().getFullYear()

    //今年の誕生日
    const birth_year = 1996
    document.getElementById("age").textContent = (today - birth_year) + "歳"
}