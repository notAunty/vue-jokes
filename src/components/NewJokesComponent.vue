<template>
  <div class="column justify-center" style="max-width: 600px">
    <h5 class="text-primary text-center">Cuz I have jokes to share</h5>
    <h6 class="joke-text text-center">{{ joke }}</h6>
    <button class="new-joke-btn bg-primary" @click="addJoke">Add Joke</button>
  </div>
</template>

<style scoped>
.text-center {
  text-align: center;
}

.joke-text {
  font-weight: 400;
}

.new-joke-btn {
  border: none;
  appearance: none;
  padding: 8px 16px;
  width: fit-content;
  border-radius: 8px;
  margin: 32px auto 0;
  color: white;
}
.new-joke-btn:hover {
  background-color: darkblue !important;
}
</style>

<script lang="ts">
import {
  defineComponent,
  // PropType, computed, ref, toRef, Ref,
} from "@vue/composition-api";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "NewJokesComponent",
  // props: {
  //   title: {
  //     type: String,
  //     required: true,
  //   },
  // },
  methods: {
    ...mapActions("jokes", { addJoke: "fetchNewJoke" }),
  },
  computed: {
    ...mapGetters("jokes", { joke: "getCurrentJoke" }),
  },
  setup: (props) => {
    return {};
  },
});
</script>
