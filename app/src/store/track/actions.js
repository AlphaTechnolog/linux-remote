import { fetchTrack, fetchArtUrl, fetchStatus, pause, previous, next } from '../../api/track'
import * as types from './mutations-types'

export default {
  fetchTrack ({ commit }) {
    commit(types.GET_TRACKNAME_REQUEST)
    fetchTrack()
      .then(track => commit(types.GET_TRACKNAME_SUCCESS, track))
      .catch(error => commit(types.GET_TRACKNAME_FAILURE, error))
  },
  fetchArtUrl ({ commit }) {
    commit(types.GET_ART_URL_REQUEST)
    fetchArtUrl()
      .then(artUrl => commit(types.GET_ART_URL_SUCCESS, artUrl))
      .catch(error => commit(types.GET_ART_URL_FAILURE, error))
  },
  fetchStatus ({ commit }) {
    commit(types.GET_STATUS_REQUEST)
    fetchStatus()
      .then(status => commit(types.GET_STATUS_SUCCESS, status))
      .catch(error => commit(types.GET_STATUS_FAILURE, error))
  },
  previousTrack () {
    previous()
  },
  pauseTrack () {
    pause()
  },
  nextTrack () {
    next()
  },
}
