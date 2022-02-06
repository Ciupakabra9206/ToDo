let todoInput, errorInfo, addBtn, ulList, newTodo

const main = () => {
    prepaerDOMElements()
    prepaerDOMEvents()
}

const prepaerDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}

const prepaerDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
}


const addNewTodo = () => {
    if(todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)
        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania'
    }
}

document.addEventListener('DOMContentLoaded', main)