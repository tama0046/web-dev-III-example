//the alert function will add a pop-up with a message
//alert("hello world!");

console.log("hello world! ...quietly");

//tell the first paragraph (id p1) to listen for a click
document.getElementById("p1").addEventListener("click", function(){
    //change the text in the second paragraph (id p2)
    document.getElementById("p1").textContent = "You clicked on the first paragraph";
    
});

//tell the first paragraph (id p1) to listen for a click
document.getElementById("p2").addEventListener("click", function(){
    //change the text in the second paragraph (id p2)
    document.getElementById("p2").textContent = "You clicked on the first paragraph";
    
});