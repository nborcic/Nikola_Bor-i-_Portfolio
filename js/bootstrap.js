document.addEventListener('DOMContentLoaded', (event) => {
  const myName = "Nikola Borčić";
  const myEmail = "nickborcic1@ymail.com";
  const myPhone = "486 44 338";

  function showCopiedText(copyInput, id) {
    if (copyInput.value === myName && id === 1) {
      copyInput.value = 'Copied';
      setTimeout(() => {
        copyInput.value = myName;
        console.log(copyInput.value);
      }, 2000);
    } else if (copyInput.value === myEmail && id === 2) {
      copyInput.value = 'Copied';
      setTimeout(() => {
        copyInput.value = myEmail;
        console.log(copyInput.value);
      }, 2000);
    } else if (copyInput.value === myPhone && id === 3) {
      copyInput.value = 'Copied';
      setTimeout(() => {
        copyInput.value = myPhone;
        console.log(copyInput.value);
      }, 2000);
    }
  }

  const inputName = document.getElementById('inputName');
  const inputEmail = document.getElementById('inputEmail');
  const inputPhone = document.getElementById('inputPhone');

  inputName.addEventListener('click', function () {
    showCopiedText(inputName, 1);
  });

  inputEmail.addEventListener('click', function () {
    showCopiedText(inputEmail, 2);
  });

  inputPhone.addEventListener('click', function () {
    showCopiedText(inputPhone, 3);
  });
});



const goTo = (link) => {
  window.location.href = link;
}