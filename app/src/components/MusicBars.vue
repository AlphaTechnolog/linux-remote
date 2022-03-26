<script setup>
import useTrack from '../composables/useTrack'

const { fetching, status } = useTrack()
</script>

<template html>
  <div :class='{ now: true, playing: true, paused: status === "Paused"}' v-if="!fetching">
    <span class="bar n1">A</span>
    <span class="bar n2">B</span>
    <span class="bar n3">c</span>
    <span class="bar n4">D</span>
    <span class="bar n5">E</span>
    <span class="bar n6">F</span>
    <span class="bar n7">G</span>
    <span class="bar n8">H</span>
  </div>
</template>

<style scoped>
.playing {
  width: auto;
  transform: translateX(-50%) translateY(-50%);
}
.now.playing .bar {
  display: inline-block;
  margin-right: 1px;
  width: 5px;
  height: 1px;
  overflow: hidden;
  background: linear-gradient(to bottom, var(--green), var(--blue), var(--magenta), var(--yellow), var(--red));
  color: transparent;
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.paused.playing .bar {
  animation-iteration-count: 1;
}
.n1 {
  animation-delay: 0.5s;
}
.n2 {
  animation-delay: 0.2s;
}
.n3 {
  animation-delay: 1.2s;
}
.n4 {
  animation-delay: 0.9s;
}
.n5 {
  animation-delay: 2.3s;
}
.n6 {
  animation-delay: 1.3s;
}
.n7 {
  animation-delay: 3.1s;
}
.n8 {
  animation-delay: 1.9s;
}
@keyframes pulse {
  0% {
    height: 1px;
    margin-top: 0;
  }
  10% {
    height: 30px;
    margin-top: -30px;
  }
  50% {
    height: 25px;
    margin-top: -25px;
  }
  60% {
    height: 10px;
    margin-top: -10px;
  }
  80% {
    height: 28px;
    margin-top: -28px;
  }
  100% {
    height: 1px;
    margin-top: 0;
  }
}
</style>
