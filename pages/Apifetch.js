import { useState, useEffect } from "react/cjs/react.development"
import {useFetching} from './hook/useFetch'
import PostService from './api/PostService'
import Loader from './components/Loader'


const apifetch = () => {
  const [posts, setPosts] = useState([])
  const [limit, setLimit] = useState('')
  const [usefetchPosts, loading, error] = useFetching(async(limit) => {
    const response = await PostService.getTodos(limit)
    setPosts(response)
  })

  useEffect(() => {
    if(limit <=0){
      return false
    }
    else{
      usefetchPosts(limit)
    }
  }, [limit])

  return (
    <div>
      <h4>Get Posts</h4>
      <input type="text" placeholder="Select Api Limit" value={limit} onChange={e =>setLimit(e.target.value)}/>
      <span style={{color:'red', fontFamily:'system-ui'}}>{error}</span>
      {loading ? <Loader/> : posts.map((item, index) => <div key={index}>{item.id}. {item.title}</div>)}
    </div>
  )
}

export default apifetch