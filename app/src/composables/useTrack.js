import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default () => {
  const store = useStore()
  const track = computed(() => store.state.track.trackname)
  const fetchingTrack = computed(() => store.state.track.fetching)
  const error = computed(() => store.state.track.error)
  const artUrl = computed(() => store.state.track.artUrl)
  const status = computed(() => store.state.track.status)

  onMounted(async () => {
    if (!track.value) {
      setInterval(() => {
        store.dispatch('fetchTrack')
        store.dispatch('fetchArtUrl')
        store.dispatch('fetchStatus')
      }, 500)
    }
  })

  return {
    track,
    artUrl,
    status,
    fetching: fetchingTrack,
    error
  }
}
