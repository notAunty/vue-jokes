<template>
  <div class="column items-start" style="width: 600px">
    <h5 class="text-primary page-title">Jokes</h5>
    <div class="row" style="gap: 8px;">
      <joke-component v-for="joke in allJokes" :key="joke" v-bind="joke" :joke="joke"/>
    </div>
  </div>
</template>

<style scoped>
.page-title {
  margin-bottom: 24px;
}

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
}
.new-joke-btn:hover {
  background-color: yellow;
}
</style>

<script lang="ts">
import {
  defineComponent,
  // PropType, computed, ref, toRef, Ref,
} from "@vue/composition-api";
import { mapGetters } from "vuex";
import JokeComponent from "./JokeComponent.vue";

export default defineComponent({
  components: { JokeComponent },
  name: "AllJokesComponent",
  props: {},
  // methods: {
  //   ...mapActions("jokes", { jokeRequest: "fetchNewJoke" }),
  // },
  computed: {
    ...mapGetters("jokes", { allJokes: "getAllJokes" }),
  },
  setup: (props) => {
    return {};
  },
});
</script>
