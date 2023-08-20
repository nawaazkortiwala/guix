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

export type Theme = object

export type Context = object

export type CSSValue<T extends keyof StandardProperties> = StandardProperties[T]

export type CSSValueFn<T extends keyof StandardProperties> = (
  theme: Theme,
  context: Context
) => CSSValue<T>

export type CSSProperties = {
  [key in keyof StandardProperties as `$${string & key}`]: CSSValue<key> | CSSValueFn<key>
}
