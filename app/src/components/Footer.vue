<script setup>
import useTrack from '../composables/useTrack'
import MusicBars from './MusicBars.vue'

const { fetching, artUrl, track } = useTrack()
</script>

<template html>
  <div class="bottom" v-if="!fetching">
    <div class="art-url-container">
      <div class="art-url-thumb">
        <img
          :src="artUrl"
          alt="artUrl"
        />
      </div>
      <div class="art-url-content">
        <p class='green-text'><span class="blue-text"> </span>{{ track }}</p>
      </div>
      <div class='music-bars'>
        <MusicBars />
      </div>
    </div>
  </div>
</template>
