const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

// Loads the initial content on the page - comment out if you want all the content to appear on scroll 
checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {  
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  });
}