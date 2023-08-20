import React from 'react'
import { CSSProperties } from './css-types'
export type ElementProps<T> = React.HTMLAttributes<T> & CSSProperties
export type ElementPropsWithChildren<T> = React.PropsWithChildren<ElementProps<T>> & CSSProperties
