const button = document.querySelector('.istbtn')
const closeIcon = document.querySelector('.close-icon')
const popup = document.querySelector('.pop-up')

    button.addEventListener('click', () => {
        button.classList.add('open')
    })

    closeIcon.addEventListener('click', () => {
        popup.classList.remove('open')
      })







