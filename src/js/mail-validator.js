 const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const input = document.querySelector('input');

  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
  }

  function onInput() {
    if (isEmailValid(input.value)) {
      input.style.borderColor = 'green';
    } else {
      input.style.borderColor = 'red';
    }
  }

  input.addEventListener('input', onInput);