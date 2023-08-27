/* ===================================================
                 Form Section 
======================================================= */

function buttonClick() {
    let inputText = document.getElementById('input-text');
    inputText.innerText = 'Changed Text by Click';
    //console.log('clicked');
}

document.getElementById('btn-submit').addEventListener('click', function () {
    //console.log('Click me');
    const inputName = document.getElementById('name-id');
    let getName = inputName.value;
    inputName.value = '';
    console.log(getName);

    const inputEmail = document.getElementById('email-id');
    let getEmail = inputEmail.value;
    inputEmail.value = '';
    console.log(getEmail);
})