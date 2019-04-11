// Enable the enter key to submit a new item from the input field.
var inputField = document.getElementById("list-entry");

inputField.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("add-btn").click();
  }
});

// Create a new item for the list
document.getElementById("add-btn").addEventListener("click", function() {
  var textInput = document.getElementById("list-entry").value;
  var node = document.createElement("LI");
  node.setAttribute("class", "default-cursor");

  // Give each element a unique ID
  var items = document.querySelectorAll("#list li");
  for (let i = 0; i <= items.length; i++) {
    var uniqueId = function() {
      i = Math.random()
        .toString(36)
        .substr(2, 16);
    };
    uniqueId(i);
    node.setAttribute("id", i);
  }

  var textNode = document.createTextNode(textInput);
  node.appendChild(textNode);

  // Add item to list if input field is not blank
  if (textInput === "") {
    alert("Please enter some text to create a new item");
  } else {
    document.getElementById("list").appendChild(node);
  }

  document.getElementById("list-entry").value = "";

  // Append a remove button to each li element
  var span = document.createElement("BUTTON");
  span.setAttribute("id", "appendedBtn");
  span.setAttribute("onclick", "elementId()");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  node.appendChild(span);
});

// Function to remove the li element when X btn is clicked - Fired by html onclick attribute.
function elementId() {
  console.log(
    "The following element was removed: ",
    event.target.parentElement
  );
  var elementToRemove = document.getElementById(event.target.parentElement.id);
  elementToRemove.remove();
}

// Saving to localStorage
var getList = document.querySelector("ul");

window.onbeforeunload = function() {
  localStorage.setItem("recallListItems", getList.innerHTML);
};

var saved = localStorage.getItem("recallListItems");

if (saved) {
  getList.innerHTML = saved;
}

// Clear button
document.getElementById("clear-btn").addEventListener("click", function() {
  if (
    confirm("This will clear everything in the To-Do list. \n \n Are you sure?")
  ) {
    localStorage.clear();
    document.getElementById("list").innerHTML = "";
  } else {
    return;
  }
});

// Toggle a LI element when clicked - line-through + colour change
getList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  } else {
    return;
  }
});

// Scroll-to-top button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top").style.display = "block";
  } else {
    document.getElementById("scroll-to-top").style.display = "none";
  }
};

window.onload = function() {
  document
    .getElementById("scroll-to-top")
    .addEventListener("click", function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
};
