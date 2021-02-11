function playSound(soundfile) {
    document.getElementById("playSound").innerHTML = document.getElementById("playSound").innerHTML +
        "<embed src=\"" + soundfile + "\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}