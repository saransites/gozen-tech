import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import userReducer from './Slice'

const Store = configureStore({
    reducer:{
        data:userReducer
    }
})

export default Store