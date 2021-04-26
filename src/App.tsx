import { TodoListItem } from './components/TodoListItem';
import { Todo } from './components/types';

const todos: Array<Todo> = [
  { title: "walk the dog", complete: true, dueDate: '2021-04-21' },
  { title: "walk the dog", complete: false, dueDate: '2021-04-22' }
]
const App: React.FC = () => (
  <div>
   <TodoListItem todo={todos[0]} />
   <TodoListItem todo={todos[1]} />
  </div>
)

export default App;