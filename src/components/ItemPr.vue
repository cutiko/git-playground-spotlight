<template>
  <div class="flex flex-row">
    <img class="rounded-full avatar" :src="pr.user.avatar_url">
    <p class="m-2">
      {{pr.user.login}}
    </p>
    <a :href="pr.pull_request.html_url" target="_blank" rel="noreferrer" class="m-2">{{pr.closed_at | formatDate}}</a>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {PullRequest} from "@/models/PullRequest";
  import moment from "moment"

  export default Vue.extend({
    name: 'ItemPr',
    props: {
      pr: {type: Object as ()=> PullRequest},
    },
    filters: {
      formatDate: (uglyDate: string)=>moment(uglyDate).format("MMMM d YYYY")
    }
  });

</script>

<style>
  .avatar {
    width: 2em;
    height: 2em;
  }
</style>
