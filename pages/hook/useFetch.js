import { useState } from "react/cjs/react.development"

export const useFetching = (callback) => {
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchPosts = async (...args) => {
    try {
      setLoading(true)
      await callback(...args)
    } catch (error) {
      setError(error.message)
    }
    finally{
      setLoading(false)
    }
  }
  return [fetchPosts, loading, error]
}