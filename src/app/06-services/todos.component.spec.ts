import {TodosComponent} from './todos.component';
import {TodoService} from './todo.service';
import {of, throwError} from "rxjs";

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    // @ts-ignore
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('Should populate toDo property with items retrieved from the server', () => {

    let toDos = [1, 2, 3];

    spyOn(service, "getTodos").and.callFake(() => {
      return of(toDos);
    });

    component.ngOnInit();

    expect(component.todos).toBe(toDos);
  });

  it('should call the server to save changes when a new todo item is created', () => {
    let spy = spyOn(service, "add").and.callFake((t) => {
      return of();
    })

    component.add();

    expect(spy).toHaveBeenCalled();

  });

  it('should add the new toDo returned from the server', () => {
    let todo = {id: 1};
    spyOn(service, "add").and.callFake((t) => {
      return of(todo);
    })

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);

  });

  it('should add an error message in case the call to the server returns an error when adding a new todo', () => {

    let error = 'error from the server';

    spyOn(service, "add").and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);

  });


  it('should call the server to delete a todo item if the user confirms', function () {

    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(of());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);


  });

  it('should NOT call the server to delete a todo item if the user cancels', function () {

    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(of());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();


  });
});
