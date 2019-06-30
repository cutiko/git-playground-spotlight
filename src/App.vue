<template>
  <div id="app" class="container mx-auto">
    <PrList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PrList from "@/components/ListPr.vue";


export default Vue.extend({
  name: 'app',
  components: {
    PrList
  }
});
</script>
