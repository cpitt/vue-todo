<template>
  <div>
    <v-treeview :items="store" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
function generateTree(obj) {
  return Object.keys(obj).reduce((out, key) => {
    const item = { name: `${key}: ` };
    if (Array.isArray(obj[key])) {
      item.name += '[]';
      item.children = generateTree(obj[key]);
    } else if (typeof obj[key] === 'object' && key !== null) {
      item.name += '{}';
      item.children = generateTree(obj[key]);
    } else {
      item.name += obj[key];
    }
    return [...out, item];
  }, []);
}
export default {
  computed: {
    ...mapState({ store: state => generateTree(state) }),
  },
};
</script>
