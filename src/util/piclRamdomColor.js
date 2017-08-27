let prevColorIndex = 0;


function random(colors) {
    let nowColorIndex = 0
    do {
        nowColorIndex = Math.floor(Math.random()*colors.length)
    } while (nowColorIndex === prevColorIndex);

    prevColorIndex = nowColorIndex;
    return colors[nowColorIndex]
}

export default {
    random
}