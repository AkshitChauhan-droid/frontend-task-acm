//js
// catch
document.addEventListener("DOMContentLoaded", function(event) { 
    const postCommentButton1 = document.getElementById("button1");
const textInput1 = document.getElementById("input1");

const comments1 = document.getElementById("comments1")


// events
// event listener to the button
postCommentButton1.addEventListener("click", function() {
    let p = document.createElement("p");
    p.textContent = textInput1.value;
    comments1.append(p);
    textInput1.value = "";
})
    //here your code
  });




