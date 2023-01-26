// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// HEX : #FFFFFF --> 2 premier = teneur en rouge, puis vert, puis bleu

let rgb = [255, 0, 43];
let hex = '#FF24A3';

const autoConvert = (value) => {
    let result = '';
        if (typeof(value) === 'string'){
            let removeHash = value.replace('#', '');
            let red = parseInt(removeHash.substring(0,2), 16);
            let green = parseInt(removeHash.substring(2,4), 16);
            let blue = parseInt(removeHash.substring(4,6), 16);
            result = [red, green, blue];
        } else if (typeof(value) === 'object'){
            let red = value[0].toString(16);
            let green =value[1].toString(16);
            let blue =value[2].toString(16);
            if(value[0] <= 15 && value[1] <= 15 && value[2] <= 15){
                console.log("1");
                red ='0' + value[0].toString(16);
                green ='0' + value[1].toString(16);
                blue ='0' + value[2].toString(16);
            }else if (value[0] <= 15 && value[2] <= 15){
                console.log("2");
                red ='0' + value[0].toString(16);
                green =value[1].toString(16);
                blue ='0' + value[2].toString(16);
            }else if (value[1] <= 15 && value[2] <= 15){
                console.log("3");
                red = value[0].toString(16);
                green ='0' + value[1].toString(16);
                blue ='0' + value[2].toString(16);
            }else if (value[0] <= 15 && value[1] <= 15){
                console.log("4");
                red ='0' + value[0].toString(16);
                green ='0' + value[1].toString(16);
                blue =value[2].toString(16);
            } else if (value[0] <= 15){
                console.log("5");
                red ='0' + value[0].toString(16);
                green =value[1].toString(16);
                blue =value[2].toString(16);
            }else if (value[1] <= 15){
                console.log("6");
                red = value[0].toString(16);
                green ='0' + value[1].toString(16);
                blue =value[2].toString(16);
            }else{
                console.log("7");
                red = value[0].toString(16);
                green =value[1].toString(16);
                blue ='0' + value[2].toString(16);
            }
            result ='#' + red + green + blue;
        } else{
            return 'Value not compatible';  
        }
    return result
}