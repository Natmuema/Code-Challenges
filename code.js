
  const body = document.getElementById('body');
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');

  const originalColor = window.getComputedStyle(body).backgroundColor;

  function changeBackgroundColor(color) {
    body.style.backgroundColor = color;
  }

  button1.addEventListener('click', function() {
    changeBackgroundColor(window.getComputedStyle(button1).backgroundColor);
  });

  button2.addEventListener('click', function() {
    changeBackgroundColor(window.getComputedStyle(button2).backgroundColor);
  });

  body.addEventListener('click', function(event) {
    if (event.target.tagName === 'BODY') {
      changeBackgroundColor(originalColor);
    }
  });
