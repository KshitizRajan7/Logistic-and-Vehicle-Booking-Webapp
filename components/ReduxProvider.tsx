"use client"
import { Provider } from "react-redux"
import {store} from '@/redux'

export const ReduxProvider = ({children}:{children:React.ReactNode})=>{
    return(
        <Provider store={store}>
            {children}
        </Provider>

    )
}