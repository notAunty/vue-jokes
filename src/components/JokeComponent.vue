<template>
  <q-card flat class="bg-primary card">
    <p>{{joke}}</p>
  </q-card>
</template>

<style scoped>
.card {
  border-radius: 8px;
  width: calc(50% - 8px);
  padding: 16px 12px 12px;
  color: white;
}
</style>

<script>
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  props: {
    joke: {
      type: String,
      required: true,
    },
  },
})
</script>

<style>

</style>
