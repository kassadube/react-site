//import { createSelector } from 'reselect'

export const pingSelector = state => state.getIn(['counter','isPinging']);
export const countSelector = state => state.getIn(['counter','val']);