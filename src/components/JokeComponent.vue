<template>
  <q-card flat class="bg-primary card">
    <p class="joke-text">{{joke}}</p>
  </q-card>
</template>

<style scoped>
.joke-text {
  font-size: 1rem;
}

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
