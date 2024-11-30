const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')
// These would normally be getElementById calls, but apparently MDN says use querySelector
// const good = document.getElementById('good')
// const cheap = document.getElementById('cheap')
// const fast = document.getElementById('fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
  if(good.checked && cheap.checked && fast.checked) {
    if(good === theClickedOne) {
      fast.checked = false
    }
    if(cheap === theClickedOne) {
      good.checked = false
    }
    if(fast === theClickedOne) {
      cheap.checked = false
    }

    
  }
}