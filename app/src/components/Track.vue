<script setup>
import useTrack from '../composables/useTrack'

const { track, fetching } = useTrack()
</script>

<template>
  <div v-if="fetching">
    <h2 class="green-text">Fetching information, please wait...</h2>
  </div>
  <div v-else>
    <h2 class="blue-text"><span class="magenta-text"> </span>{{ track }}</h2>
  </div>
</template>
