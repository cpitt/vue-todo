import { shallowMount } from '@vue/test-utils';
import Todo from './Todos.vue';

describe('TODO Modules', () => {
  const wrapper = shallowMount(Todo, {
    stubs: ['v-container', 'router-view'],
  });
  it('should render correct markup', function() {
    expect(wrapper.find('h1').text()).toBe('Todos Module');
    expect(wrapper.contains('v-container-stub')).toBe(true);
    expect(wrapper.contains('router-view-stub')).toBe(true);
  });
});
