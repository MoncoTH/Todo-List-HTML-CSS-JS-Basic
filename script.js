// Get the form and the list
var form = document.getElementById("todo-form");
var list = document.getElementById("todo-list");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the input value
  var input = document.getElementById("todo-input").value;

  // Create a new list item
  var item = document.createElement("li");
  item.innerHTML = input;

  // Add the new item to the list
  list.appendChild(item);

  // Clear the input field
  document.getElementById("todo-input").value = "";
});
