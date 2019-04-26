import TodosListItem from './TodosListItem.vue';
import { shallowMount } from '@vue/test-utils';
import Todo from '../store/models/Todo';

describe('TodosListItem', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      todo: new Todo(),
    };
    wrapper = shallowMount(TodosListItem, { propsData: props });
  });

  it('should render a text-field if state isEditing is true and a list-title-tile if false', () => {
    wrapper.vm.isEditing = true;
    expect(wrapper.contains('v-text-field-stub')).toBe(true);
    wrapper.vm.isEditing = false;
    expect(wrapper.contains('v-list-tile-title-stub')).toBe(true);
  });

  // This test feels a little bit like testing the framework, but I'm not
  // sure what better way there is to smoke test the function binding in templates?
  it('should fire todo-toggle event when check box changes', () => {
    const toggleTodoMock = jest.fn();
    wrapper.setMethods({ toggleTodo: toggleTodoMock });
    const CheckBox = wrapper.find('[data-test="todos-list-item-checkbox"]');
    CheckBox.vm.$emit('change');
    expect(toggleTodoMock).toHaveBeenCalled();
  });

  describe('#toggleIsEditing', () => {
    it('should toggle isEditing when toggleIsEditing() is called', () => {
      wrapper = shallowMount(TodosListItem, { propsData: props });
      expect(wrapper.vm.isEditing).toEqual(false);
      wrapper.vm.toggleIsEditing();
      expect(wrapper.vm.isEditing).toEqual(true);
    });
  });

  describe('#toggleTodo', () => {
    it('should emit todo-toggle', () => {
      wrapper.vm.toggleTodo();
      expect(wrapper.emitted()['todo-toggle']).toBeTruthy();
    });
  });

  describe('#updateTodo', () => {
    const event = { target: { value: 'hi' } };
    it('should call toggleIsEditing', () => {
      wrapper.vm.updateTodo(event);
      expect(wrapper.vm.isEditing).toBe(false);
    });

    it('should emit todo-edit event', () => {
      wrapper.vm.updateTodo(event);
      expect(wrapper.emitted()['todo-edit'][0]).toEqual([
        props.todo,
        { title: event.target.value },
      ]);
    });
  });
});
