import React, { HTMLAttributes } from 'react'
import { IStyledComponent } from 'styled-components'

import { CSSProperties, CSSStyleFn } from './css-types'

type FastOmit<T extends object, U extends string | number | symbol> = {
  [K in keyof T as K extends U ? never : K]: T[K]
}

type Substitute<A extends object, B extends object> = FastOmit<A, keyof B> & B

interface ReactAttributes<T> extends HTMLAttributes<T> {}

export type ElementProps<T> = React.HTMLAttributes<T> & CSSProperties<T>

export type ElementPropsWithChildren<T> = React.PropsWithChildren<ElementProps<T>>

export type Element<R extends ReactAttributes<E>, E> = IStyledComponent<
  'web',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Substitute<React.DetailedHTMLProps<R, E>, CSSProperties<any>>
>

// eslint-disable-next-line @typescript-eslint/ban-types
export type StyleFnObject<T = {}> = Record<string | number | symbol, CSSStyleFn<T>>
