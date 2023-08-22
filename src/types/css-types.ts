/**
 * @file This file contains all the types related to the global CSS Properties available for all core building blocks.
 * @author Nawaaz Kortiwala <nawaazkortiwala@gmail.com>
 *
 * This file is part of the MyProject open source project, which can be found at https://github.com/nawaazkortiwala/guix.
 *
 * Copyright (c) 2023 Nawaaz Kortiwala
 *
 * Licensed under the Apache 2.0 License. See LICENSE.txt for more information.
 */

import { StandardProperties } from 'csstype'

import { Context } from './state-types'

export type CSSValue<T extends keyof StandardProperties> = StandardProperties[T]

export type CSSFnArgs<T = unknown> = {
  theme: T
  context: Context<T>
}
export type CSSValueFn<S extends keyof StandardProperties, T = unknown> = (
  args: CSSFnArgs<T>
) => CSSValue<S>

export type CSSStyleFn<T = unknown> = (args: CSSFnArgs<T>) => CSSProperties<T>

export enum CSSAddOnsKeys {
  style = `$style`,
  hover = `$hover`,
}

export type CSSAddOns<T = unknown> = {
  [key in CSSAddOnsKeys]: CSSProperties<T> | CSSStyleFn<T>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CSSProperties<T = any> = {
  [key in keyof StandardProperties as `$${string & key}`]: CSSValue<key> | CSSValueFn<key, T>
} & Partial<CSSAddOns<T>>

export type CSSPropertiesWithTheme<T = unknown> = CSSProperties<T> & {
  theme: Context<T>
}
