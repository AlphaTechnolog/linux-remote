<script setup>
import useControls from '../../composables/useControls'

const { previous } = useControls()
</script>

<template html>
  <button class='green-text music-control previous-control' @click='previous'>
    ﭢ
  </button>
</template>
