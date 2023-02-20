import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import React from "react"
import { useLazyRef } from "../../utils/useLazyRef"



const initQueryClient = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 5, // 5 minutes
				cacheTime: 1000 * 60 * 60 * 24 // 24 hours
			}
		}
	})

	window._app["queryClient"] = queryClient

	return queryClient
}

export interface ProvideReactQueryServiceProps {
	children: React.ReactNode
}

const ProvideReactQueryServiceComponent = ({ children }: ProvideReactQueryServiceProps) => {
	const queryClientRef = useLazyRef(initQueryClient)

	return (
		<QueryClientProvider client={queryClientRef.current}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}

export const ProvideReactQueryService = React.memo(ProvideReactQueryServiceComponent)
