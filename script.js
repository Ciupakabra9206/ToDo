let todoInput, errorInfo, addBtn, ulList, newTodo, popup, popupInfo, todoToEdit, popupInput, popupAddBtn, popupCloseBtn

const main = () => {
    prepaerDOMElements()
    prepaerDOMEvents()
}

const prepaerDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
}

const prepaerDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
}


const addNewTodo = () => {
    if(todoInput.value !== '') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)
        createToolsArea()

        ulList.append(newTodo)

        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania'
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeBnt = document.createElement('button')
    completeBnt.classList.add('complete')
    completeBnt.innerHTML = '<i class="fas fa-check"></i>'

    const editBnt = document.createElement('button')
    editBnt.classList.add('edit')
    editBnt.textContent = 'EDIT'

    const deleteBnt = document.createElement('button')
    deleteBnt.classList.add('delete')
    deleteBnt.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBnt, editBnt, deleteBnt)
}

const checkClick = e => {
    if(e.target.matches('.complete')) {
      e.target.closest('li').classList.toggle('completed')
      e.target.classList.toggle('completed')
    } else if(e.target.matches('.edit')) {
       editTodo()
    } else if(e.target.matches('.delete')) {
        console.log('delete');
        console.log('yes');
    }
}

const editTodo = () => {
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', main)