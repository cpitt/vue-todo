import { shallowMount } from '@vue/test-utils';
import Button from './TodosAddButton.vue';
describe('TodosAddButton', () => {
  const Stub = {
    template: `<div />`,
  };
  const wrapper = shallowMount(Button, {
    stubs: {
      VBtn: Stub,
      VIcon: Stub,
    },
  });
  it('should emit "todos-add" event on click', () => {
    wrapper.find(Stub).vm.$emit('click');
    expect(wrapper.emitted()['todos-add']).toBeTruthy();
  });
});
