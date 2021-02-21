var buttons = document.querySelectorAll('.button');

buttons.forEach(function (button) {
    button.onclick = function () {
        let color = this.style.backgroundColor;
        switch (color) {
            //red
            case "rgb(230, 176, 170)":
                color = "rgb(174, 214, 241)";
                break;
             //blue
            case "rgb(174, 214, 241)":
                color = "rgb(215, 189, 226)";
                break;
            //purple
            case "rgb(215, 189, 226)":
                color = "rgb(204, 209, 209)";
                break;
            //grey
            case "rgb(204, 209, 209)":
                color = "rgb(250, 250, 165)";
                break;
            //yellow
            case "rgb(250, 250, 165)":
                color = "rgb(255, 255, 255)";
                break;
            //white
            case "rgb(255, 255, 255)":
                color = "rgb(230, 176, 170)";
                break;
            default:
                color = "rgb(230, 176, 170)";
        }
        this.style.backgroundColor = color;

    };
})


// buttons[0].onclick = function () {
//     var red = Math.floor(Math.random() * 256);
//     var blue = Math.floor(Math.random() * 256);
//     var green = Math.floor(Math.random() * 256);

//     this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
// };