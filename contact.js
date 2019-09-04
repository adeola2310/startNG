    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const submit = document.getElementById('submit');

function submitForm() {
if (name =="" || email == "" ||title =="" || message ==""  ){
    alert('all field must be filled');
}
else{
    alert('Form successfully submitted');
}
}
