import { useRef } from "react"

const NONE = {}

/**
 * Acts just like useRef except the init function is only run once during initialization.
 * @param init
 * @returns
 */
export const useLazyRef = <TValue>(init: () => TValue) => {
	const lazyRef = useRef<TValue>(NONE as TValue)
	if (lazyRef.current === NONE) {
		lazyRef.current = init()
	}
	return lazyRef
}
