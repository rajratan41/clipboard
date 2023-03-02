// Get the text field
let copyText = document.getElementById("myInput");

function copy() {
  // Select the text field
  copyText.select();

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
