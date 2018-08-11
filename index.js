function previewFirstName(event){
  console.log(event.srcElement.value)
  document.getElementByID('first_name_preview').innerText = event.srcElement.value
}

document.getElementById("first_name").addEventListener("keyup", previewFirstName);