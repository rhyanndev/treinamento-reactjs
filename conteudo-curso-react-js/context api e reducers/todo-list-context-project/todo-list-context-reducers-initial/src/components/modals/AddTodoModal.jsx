import { useTodos } from '../../TodosContext.jsx';


function AddTodoModal() {


    const store = useTodos();

    function addTaskHandler() {
        let newTodo = {isDone: false};
        newTodo.title = document.querySelector('input[name=title]').value;
        newTodo.description = document.querySelector('textarea[name=description]').value;
        if(newTodo.title && newTodo.description) {
            store.dispatch({type: 'added', newTodo});
            store.setModalIsActive(false);
        }
        else {
            alert('Por favor digite o título e a descrição!')
        }
    }


    return (
    <>
        <div className="form">      
            <h3>Adicionar nova tarefa</h3>
            <label htmlFor="title">Título *</label>
            <input type="text" name="title" placeholder="Enter a title..." /><br />
            <label htmlFor="description">Descrição *</label>
            <textarea name="description" rows="4" placeholder="Enter a description..." /><br />
            <button onClick={addTaskHandler} className="btn gray">Adicionar</button>
        </div>
    </>
    )
  }
  
  export default AddTodoModal