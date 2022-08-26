//Event propagation is used to discuss both the bubbling phase and the capture

//Adding and removing event from a button

document.addEventListener("DOMContentLoaded",onPageload);

function onPageLoad(){
    let theButton = document.getElementById("myButton");
    theButton.addEventListener("click", handleButtonClick);
}
function  handleButtonclick(){
    console.log("button clicked");
    let theButton = document.getElementById("myButton");
    theButton.removeEventListener("click", handleButtonclick)
}


//Adding Multiple Events to a button


document.addEventListener("DOMContentLoaded",onPageload);

function onPageLoad() {
    let theButton = document.getElementById("myButton");
    theButton.addEventListener("click", handleButtonClick);
    theButton.addEventListener("mouseover", mouseOverEvent);
    theButton.addEventListener("mouseout", mouseOutEvent);

}
function handleButtonclick() {
    console.log("button clicked");
}
function mouseOverEvent(){
    console.log("mouseover")

}
function mouseOutEvent(){
    console.log("mouseout");
}

// Finding object that was clicked

document.addEventListener("DOMContentLoaded",onPageload);

function onPageLoad() {
    let theButton = document.getElementById("myLink");
    theButton.addEventListener("click", function(evt){
        evt.preventDefault();
        console.log(evt);
        console.log(evt.target);
     });


}
//creating and using custom events

function onPageLoad() {
    let myButton = document.getElementById("myButton");
    myButton.addEventListener("click", onButtonClick, true);
    myButton.addEventLIstener("WORLD_ENDING_EVENT", onWorldEnd);
}
function onButtonClick(evt){
    let custEvent = new CustomEvent("WORLD_ENDING_EVENT", {
        // detail: message: {"And I feel fine"}
})

    let myButton = document.getElementById("myButton");
    myButton.dispatchEvent(custEvent);

}
function onWorldEnd(evt){
    console.log(evt);
    console.log(evt.type)
    console.log(evt.detail)
    // {...}, type:"WORLD_ENDING_EVENT", target: button #myButton,
    //     currentTarget : button#myButton,...}
}