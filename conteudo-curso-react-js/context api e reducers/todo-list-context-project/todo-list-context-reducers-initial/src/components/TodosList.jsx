import { useTodos } from '../TodosContext.jsx';
import Todo from './Todo.jsx';

function TodosList() {

  //Vai guardar tudo está no context
  const store = useTodos();

  return (
    <>
      <div className="todos">

        {store.filteredTodos().length ? store.filteredTodos().map(todo =>

          <Todo

            todo={todo}
            key={todo.id}
          />

        ) : 'Nenhuma tarefa a ser apresentada. Tente limpar o filtro ou adicionar uma nova tarefa'
      
      }

      </div>
    </>
  )
}

export default TodosList