import { useStore } from 'vuex'

export default () => {
  const store = useStore()

  const previous = () => store.dispatch('previousTrack')
  const pause = () => store.dispatch('pauseTrack')
  const next = () => store.dispatch('nextTrack')

  return {
    previous,
    pause,
    next
  }
}
