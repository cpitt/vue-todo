import { shallowMount } from '@vue/test-utils';
import TodosList from './TodosList.vue';
import TodosListItem from './TodosListItem.vue';
import Todo from '../store/models/Todo';

jest.mock('./TodosListItem.vue', () => ({ template: `<div />` }));

describe('TodosList', function() {
  const props = {
    stubs: { VList: true, TodosListItem },
    todos: [new Todo(), new Todo(), new Todo()],
  };
  const wrapper = shallowMount(TodosList, {
    propsData: props,
  });
  it('should render list of todos-list-items', () => {
    expect(wrapper.findAll(TodosListItem).length).toBe(props.todos.length);
  });
  it('should re-emmit events', () => {
    wrapper.vm.editTodo(props.todos[0], { title: 'hi' });
    wrapper.vm.toggleTodo(props.todos[0]);
    expect(wrapper.emitted()['todo-edit']).toBeTruthy();
    expect(wrapper.emitted()['todo-toggle']).toBeTruthy();
  });
});
