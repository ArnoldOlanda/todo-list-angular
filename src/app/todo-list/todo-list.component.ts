import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { todos } from './data';
import { Todo } from './models/todo.model';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [TodoItemComponent, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todos = signal<Todo[]>(todos);
  newTodo = signal<string>('');

  get completed(): number {
    return this.todos().filter((todo) => todo.completed).length;
  }

  public toggle(id: number) {
    this.todos.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  public add() {
    if (this.newTodo()) {
      this.todos.update((todos) => [
        ...todos,
        { id: todos.length + 1, name: this.newTodo(), completed: false },
      ]);
      this.newTodo.update(() => '');
    }
  };
}
