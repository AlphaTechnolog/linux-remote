import * as types from './mutations-types'

export default {
  [types.GET_TRACKNAME_REQUEST] (state) {
    state.error = null
  },

  [types.GET_TRACKNAME_SUCCESS] (state, track) {
    state.fetching = false
    state.error = null
    state.trackname = track
  },

  [types.GET_TRACKNAME_FAILURE] (state, error) {
    state.fetching = false
    state.error = error
  },

  [types.GET_ART_URL_REQUEST] (state) {
    state.error = null
  },

  [types.GET_ART_URL_SUCCESS] (state, artUrl) {
    state.fetching = false
    state.error = null
    state.artUrl = artUrl
  },

  [types.GET_ART_URL_FAILURE] (state, error) {
    state.fetching = false
    state.error = error
  },

  [types.GET_STATUS_REQUEST] (state) {
    state.error = null
  },

  [types.GET_STATUS_SUCCESS] (state, status) {
    state.fetching = false
    state.error = null
    state.status = status
  },

  [types.GET_STATUS_FAILURE] (state, error) {
    state.fetching = false
    state.error = error
  },
}
