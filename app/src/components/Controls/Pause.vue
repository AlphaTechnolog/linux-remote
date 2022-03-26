<script setup>
import useControls from '../../composables/useControls'

const { pause } = useControls()
</script>

<template html>
  <button class='green-text music-control' @click='pause'>
     
  </button>
</template>
