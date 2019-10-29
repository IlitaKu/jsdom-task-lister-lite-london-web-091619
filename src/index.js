document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')

  form.addEventListener('submit', function(e){
    e.preventDefault()
    

  const toDoTask = document.querySelector('input[placeholder = "description"]').value


  const newTask = document.createElement('li')
  const button = document.createElement('button')
  button.addEventListener('click', function(e){
    e.target.parentNode.remove();
  })


  button.innerHTML = 'x'
  button.id = 'delete'


  newTask.innerText = `${toDoTask}`  
 

  document.querySelector('#tasks').appendChild(newTask)
  newTask.appendChild(button)

})})
 
