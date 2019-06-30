<template>
  <ul>
    <li v-for="pr in items" v-bind:key="pr.id" v-bind:pr="pr">
      <ItemPr
        :pr="pr"
      />
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios'
  import {ResponseWrapper} from "@/models/ResponseWrapper";
  import ItemPr from "@/components/ItemPr.vue"

  const URL = "https://api.github.com/search/issues?q=repo:kapunahelewong/git-playground+type:pr+is:merged"

  export default Vue.extend({
    name: "PrList",
    components: {
      ItemPr
    },
    data() : ResponseWrapper {
      return {total_count: 0, items: []}
    },
    created() : void {
      axios.get(URL).then(response=>this.items = response.data.items)
    },
  })

</script>

<style scoped>

</style>
