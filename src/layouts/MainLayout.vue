<template>
  <q-layout view="hHh Lpr lFf">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title>
          Lame Jokes
        </q-toolbar-title>

        <div>Built with Quasar v{{ $q.version }}</div>

        <q-btn
          flat
          icon="menu"
          aria-label="Menu"
          @click="rightDrawerOpen = !rightDrawerOpen"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      bordered
      side="right"
      show-if-above
      v-model="rightDrawerOpen"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, ref } from '@vue/composition-api';
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    // caption: 'A joke everyday keeps the doctors away',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Jokes',
    caption: 'Previous jokes',
    icon: 'mood',
    link: '/jokes'
  },
];

export default defineComponent({
  name: 'MainLayout',
  components: { EssentialLink },
  setup() {
    const rightDrawerOpen = ref(false);
    const essentialLinks = ref(linksData);

    return {rightDrawerOpen, essentialLinks}
  }
});

</script>

<style scoped>
</style>
