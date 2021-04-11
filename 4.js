//js
// catch
const postCommentButton4 = document.getElementById("button4");
const textInput4 = document.getElementById("input4");

const comments4 = document.getElementById("comments4")


// events
// event listener to the button
postCommentButton4.addEventListener("click", function() {
    let p = document.createElement("p");
    p.textContent = textInput4.value;
    comments4.append(p);
    textInput4.value = "";
})