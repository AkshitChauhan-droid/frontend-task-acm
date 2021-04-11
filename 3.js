//js
// catch
const postCommentButton3 = document.getElementById("button3");
const textInput3 = document.getElementById("input3");

const comments3 = document.getElementById("comments3")


// events
// event listener to the button
postCommentButton3.addEventListener("click", function() {
    let p = document.createElement("p");
    p.textContent = textInput3.value;
    comments3.append(p);
    textInput3.value = "";
})
