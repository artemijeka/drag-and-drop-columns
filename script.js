(function () {
  document.addEventListener('DOMContentLoaded', function () {



    const item = document.querySelector('.item')

    item.addEventListener('dragstart', function (event) {
      event.target.classList.add('--hold')
      // setTimeout(() => {
      //   event.target.classList.add('--hide')
      // }, 0)
    })

    item.addEventListener('dragend', (event) => {
      event.target.classList.remove('--hold')//, '--hide'

    })



    const placeholders = document.querySelectorAll('.placeholder')

    for (const placeholder of placeholders) {
      placeholder.addEventListener('dragover', dragover)
      placeholder.addEventListener('dragenter', dragenter)
      placeholder.addEventListener('dragleave', dragleave)
      placeholder.addEventListener('drop', drop)
    }

    function dragover(event) {
      event.preventDefault()
    }
    function dragenter(event) {
      event.target.classList.add('--entered')
    }
    function dragleave(event) {
      event.target.classList.remove('--entered')
    }
    function drop(event) {
      event.target.prepend(item)
      event.target.classList.remove('--entered')
    }



  })
})()