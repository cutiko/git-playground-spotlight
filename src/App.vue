<template>
  <div id="app">
    <Header/>
    <Explanation/>
    <PrList/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import PrList from "@/components/ListPr.vue";
  import Header from "@/components/Header.vue";
  import Explanation from "@/components/Explanation.vue";


  export default Vue.extend({
  name: 'app',
  components: {
    PrList,
    Header,
    Explanation,
  }
});
</script>
