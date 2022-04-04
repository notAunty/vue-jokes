<template>
  <q-page class="row justify-evenly">
    <all-jokes-component />
  </q-page>
</template>

<script lang="ts">
import AllJokesComponent from "components/AllJokesComponent.vue";
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'IndexPage',
  components: { AllJokesComponent },
  setup() {},
  mounted: () => {},
});

</script>
