import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBodyComponent } from './todo-body.component';

describe('TodoBodyComponent', () => {
  let component: TodoBodyComponent;
  let fixture: ComponentFixture<TodoBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
