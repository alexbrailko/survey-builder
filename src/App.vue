<template>
  <SurveyBuilder />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SurveyBuilder from './components/SurveyBuilder.vue';

export default defineComponent({
  name: 'App',
  components: {
    SurveyBuilder,
  },
});
</script>

<style></style>
