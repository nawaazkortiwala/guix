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

import { Context, ThemeContent } from './state-types'

export type CSSValue<T extends keyof StandardProperties> = StandardProperties[T]

export type CSSFnArgs = {
  theme: ThemeContent
  context: Context
}
export type CSSValueFn<T extends keyof StandardProperties> = (args: CSSFnArgs) => CSSValue<T>

export type CSSStyleFn = (args: CSSFnArgs) => CSSProperties

export enum CSSAddOnsKeys {
  style = `$style`,
  hover = `$hover`,
}

export type CSSAddOns = {
  [key in CSSAddOnsKeys]: CSSProperties | CSSStyleFn
}

export type CSSProperties = {
  [key in keyof StandardProperties as `$${string & key}`]: CSSValue<key> | CSSValueFn<key>
} & Partial<CSSAddOns>

export type CSSPropertiesWithTheme = CSSProperties & {
  theme: Context
}
