//js
// catch
const postCommentButton2 = document.getElementById("button2");
const textInput2 = document.getElementById("input2");

const comments2 = document.getElementById("comments2")


// events
// event listener to the button
postCommentButton2.addEventListener("click", function() {
    let p = document.createElement("p");
    p.textContent = textInput2.value;
    comments2.append(p);
    textInput2.value = "";
})
