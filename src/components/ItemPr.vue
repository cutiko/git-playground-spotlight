<template>
  <div class="flex flex-row max-w-md">
    <img class="rounded-full avatar" :src="pr.user.avatar_url">
    <a :href="pr.user.login | githubLink" target="_blank" rel="noreferrer" class="mx-4 py-2 flex-grow">{{pr.user.login}}</a>
    <a :href="pr.pull_request.html_url" target="_blank" rel="noreferrer" class="py-2">{{pr.closed_at | formatDate}}</a>
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
      formatDate: (uglyDate: string)=>moment(uglyDate).format("MMMM d YYYY"),
      githubLink: (user:string)=>`https://github.com/${user}`

    }
  });

</script>

<style>
  .avatar {
    width: 3rem;
    height: 3rem;
  }
</style>
