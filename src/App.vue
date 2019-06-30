<template>
  <div id="app" class="container mx-auto">
    <HelloWorld message="Hello World Cutiko"/>
    <PrList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import PrList from "@/components/ListPr.vue";


export default Vue.extend({
  name: 'app',
  components: {
    HelloWorld,
    PrList
  }
});
</script>
