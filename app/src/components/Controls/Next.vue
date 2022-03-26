<script setup>
import useControls from '../../composables/useControls'

const { next } = useControls()
</script>

<template html>
  <button class='green-text music-control next-control' @click='next'>
    ﭠ
  </button>
</template>
