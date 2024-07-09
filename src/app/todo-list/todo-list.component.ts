import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos = signal([
    { id:1, name: 'Learn Angular', completed: false },
    { id:2,name: 'Learn Angular CLI', completed: false },
    { id:3,name: 'Learn Angular Material', completed: false },
    { id:4,name: 'Learn Angular Flex-Layout', completed: false },
    { id:5,name: 'Learn Angular Animations', completed: true },
    { id:6,name: 'Learn Angular Routing', completed: false },
    { id:7,name: 'Learn Angular Forms', completed: false },
    { id:8,name: 'Learn Angular Pipes', completed: false },
    { id:9,name: 'Learn Angular Directives', completed: true },
    { id:10,name: 'Learn Angular Services', completed: false },
    { id:11,name: 'Learn Angular Dependency Injection', completed: false },
    { id:12,name: 'Learn Angular Modules', completed: false },
  ])
  completed = computed(() => this.todos().filter(todo => todo.completed).length)

  onChange =(event:any,id:number)=>{
    this.todos.update(()=>this.todos().map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo));
    console.log(event.target.value,id);
  } 
}
