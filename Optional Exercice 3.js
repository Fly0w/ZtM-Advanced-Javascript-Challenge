// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// HEX : #FFFFFF --> 2 premier = teneur en rouge, puis vert, puis bleu

let rgb = [255, 0, 43];
let hex = '#FF24A3';

const autoConvert = (value) => {
    let result = '';
// from hex to rgb
    if (typeof(value) === 'string'){
        let removeHash = value.replace('#', ''); //delete the #

        let red = parseInt(removeHash.substring(0,2), 16);//take the 2 first hex digits and convert them to a base 10 value ('FF'=255, '00'=00)
        let green = parseInt(removeHash.substring(2,4), 16);//take the 3rd and 4th first hex digits and convert them to a base 10 value ('FF'=255, '00'=00)
        let blue = parseInt(removeHash.substring(4,6), 16);//take the 5th and 6th first hex digits and convert them to a base 10 value ('FF'=255, '00'=00)

        result = [red, green, blue];//Create the array in rgb

// from rgb to hex
    } else if (typeof(value) === 'object'){
        //By default, the values are converted to hex digits...
        let red = value[0].toString(16);
        let green =value[1].toString(16);
        let blue =value[2].toString(16);
        //... But if the hex digit is <= 15, we need a '0' before the value (ex: 10 = 'A' and not '0A')
        // For each case, we'll check if the values need a '0', starting with the case less likely to happen until the most likely to happen: (3 values < 16) --> (2 values < 16) --> (1 value < 16). If none of these conditions are fulfilled, it means the base case is working so no change
        //(3 values < 16)
        if(value[0] <= 15 && value[1] <= 15 && value[2] <= 15){
            console.log("1");
            red ='0' + value[0].toString(16);
            green ='0' + value[1].toString(16);
            blue ='0' + value[2].toString(16);
        }//(2 values < 16)
        else if (value[0] <= 15 && value[2] <= 15){
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
        }//(1 value < 16) 
        else if (value[0] <= 15){
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
        result ='#' + red + green + blue; //return the hex code with # in front of the value
    }else{
        return 'Value not compatible';  //If the value is neither a string or an array
    }
    return result
}