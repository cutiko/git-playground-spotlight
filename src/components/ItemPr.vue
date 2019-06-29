<template>
  <div>
    <img :src="pr.user.avatar_url">
    <p>
      {{pr.user.login}}
    </p>
    <p>{{pr.closed_at}}</p>
    <p>{{pr.pull_request.html_url}}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {PullRequest} from "@/models/PullRequest";

  export default Vue.extend({
    name: 'ItemPr',
    props: {
      pr: {type: Object as ()=> PullRequest},
    },
  });

</script>

<style scoped>

</style>
