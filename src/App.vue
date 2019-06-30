<template>
  <div id="app">
    <Header/>
    <PrList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PrList from "@/components/ListPr.vue";
import Header from "@/components/Header.vue";


export default Vue.extend({
  name: 'app',
  components: {
    PrList,
    Header,
  }
});
</script>
