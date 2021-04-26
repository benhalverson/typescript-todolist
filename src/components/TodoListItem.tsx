import React from 'react';
import { Todo } from './types';



interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo}) => {
  return (
    <li>
      <label htmlFor="todo">
        <input type="checkbox" name="todo" checked={todo.complete}/>
        {todo.title}
      </label>
    </li>
  )
}