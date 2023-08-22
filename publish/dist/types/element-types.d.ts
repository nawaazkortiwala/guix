import React, { HTMLAttributes } from 'react'
import { CSSProperties } from './css-types'
import { IStyledComponent } from 'styled-components'
type FastOmit<T extends object, U extends string | number | symbol> = {
  [K in keyof T as K extends U ? never : K]: T[K]
}
type Substitute<A extends object, B extends object> = FastOmit<A, keyof B> & B
interface ReactAttributes<T> extends HTMLAttributes<T> {}
export type ElementProps<T> = React.HTMLAttributes<T> & CSSProperties
export type ElementPropsWithChildren<T> = React.PropsWithChildren<ElementProps<T>>
export type Element<R extends ReactAttributes<E>, E> = IStyledComponent<
  'web',
  Substitute<React.DetailedHTMLProps<R, E>, CSSProperties>
>
export {}
