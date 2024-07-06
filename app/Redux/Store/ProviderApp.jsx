'use client'
import { Provider } from 'react-redux'
import React from 'react'
import store from './store'

export default function ProviderApp({children}) {
  return (
    <Provider store={store}>{children}</Provider>
  )
}
