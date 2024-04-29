import { useEffect, useReducer, useRef } from 'react'

interface State<T> {
  data?: T
  error?: Error
  isFetching: boolean
  isCompleted: boolean
}

type Cache<T> = Record<string, T>

// discriminated union type
type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: Error }

export function useFetch<T = unknown>(url?: string, options?: RequestInit): State<T> {
  const cache = useRef<Cache<T>>({})

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    isFetching: false,
    isCompleted: false,
  }

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading': {
        return { ...initialState, isFetching: true }
      }
      case 'fetched': {
        return { ...initialState, isCompleted: true, data: action.payload }
      }
      case 'error': {
        return { ...initialState, isCompleted: true, error: action.payload }
      }
      default: {
        return state
      }
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    // Do nothing if the url is not given
    if (!url) return

    const abortController = new AbortController()

    const fetchData = async () => {
      dispatch({ type: 'loading' })

      // If a cache exists for this url, return it
      if (cache.current[url]) {
        dispatch({ type: 'fetched', payload: cache.current[url] })
        return
      }

      try {
        const response = await fetch(url, {
          ...options,
          signal: options?.signal ?? abortController.signal,
        })
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = (await response.json()) as T
        cache.current[url] = data

        dispatch({ type: 'fetched', payload: data })
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          if (error.name === 'AbortError') return

          dispatch({ type: 'error', payload: error })
        }
      }
    }

    void fetchData()

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      abortController.abort(`Abort fetch for ${url} due component unmount`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return state
}
