import { createStore } from 'vuex'
import track from './store/track'

const store = createStore({
  modules: {
    track,
  },
})

export default store
