<template>
  <q-page class="row items-center justify-evenly">
    <new-jokes-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></new-jokes-component>
  </q-page>
</template>

<script lang="ts">
import NewJokesComponent from "components/NewJokesComponent.vue";
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'IndexPage',
  components: { NewJokesComponent },
  setup() {},
  mounted: () => {},
});

</script>
