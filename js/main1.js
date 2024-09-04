//get the button from html with id plus
const plus = document.getElementById("plus");
//get the button from html with id minus
const minus = document.getElementById("minus");

//get hidden input from html with id message
let message = document.getElementById("comment");
const myhistory = {
    num1: 0,
    sum:0,
    operator: "+",
}
let beregn = {
    num1: 0,
    sum:0,
    history: [],
    plus: function(num1) {
        this.sum += num1; //ai
    }

};



//listener for the plus button
//it ads 1 to the input and send message to user
plus.addEventListener("click", function() {
    console.log("clicked");

    //get input from html with id tal1
    let tal1 = document.getElementById("tal1");
    let numberValue = parseInt(tal1.value);
    beregn.plus(numberValue);
    console.log(numberValue);
    //numberValue = add(numberValue);
    message.value = "Værdien er nu: "+numberValue;
    myhistory.operator = "+";
    beregn.history.push(myhistory);
    
})



function newFunction() {
    minus.addEventListener("click", () => {
        console.log("clicked");

        //get input from html with id tal1
        let tal1 = document.getElementById("tal1");
        let numberValue = parseInt(tal1.value);
        console.log(numberValue);
        numberValue = add(numberValue);
        message.value = "Værdien er nu: " + numberValue;
    });
}


/**
 * Adds 1 to the input number
 * @param {number} num1 - the number to increase
 * @returns {number} the increased number
 */
function add(num1) {
    console.log("add function called with num1: "+num1);
    // TODO add 1 to the number
    num1++;
    console.log("num1 after addition: "+num1);
    // return the increased number
    return num1;
}









