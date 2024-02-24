<script setup lang="ts">
import { defineMeta } from '@web-widget/vue';
import BaseLayout from '../(components)/BaseLayout.vue';
import ReactCounter from '../(components)/Counter@widget.tsx';
import VueCounter from '../(components)/Counter@widget.vue';

defineOptions({
  meta: defineMeta({
    title: 'Home - Web Widget',
  }),
});
</script>

<template>
    <BaseLayout>
      <h1>Welcome to Web Widget.</h1>
      <p>Try to update this message in the ./routes/vue-route/index@route.vue file.</p>

      <h2>React</h2>
      <ReactCounter name="React Counter" .start="0" />

      <h2>Vue</h2>
      <VueCounter name="Vue3 Counter" .start="0" />
    </BaseLayout>
</template>