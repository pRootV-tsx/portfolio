"use client"

/* This code defines a React component called ThemeProvider that wraps the ThemeProvider component from the next-themes library. The ThemeProvider component is used to provide a theme to the entire application.

The ThemeProvider component takes in a children prop which represents the child components that will be wrapped by the ThemeProvider. It also takes in any other props that are accepted by the ThemeProvider component from the next-themes library.

The ThemeProvider component is exported so that it can be used in other parts of the application. */

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
