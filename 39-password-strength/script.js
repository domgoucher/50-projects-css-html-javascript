const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length

  // Added check for blurValue 0 and below
  // const blurValue = 20 - length * 2
  let blurValue = 20 - length * 2

  if(blurValue < 0 ){
    blurValue = 0
  }

  background.style.filter = `blur(${blurValue}px)`

})