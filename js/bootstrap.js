document.querySelectorAll('.btnn').forEach(input => {
  input.addEventListener('click', function () {
    const textToCopy = this.value;
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log(textToCopy + ' copied to clipboard');
    }).catch(error => {
      console.error('Could not copy text: ', error);
    });
  });
});


//make baloon for copy to clipboard info
//add same to contacts page