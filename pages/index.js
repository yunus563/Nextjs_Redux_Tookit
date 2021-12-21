import React, {useState} from 'react'
import Link from 'next/link'
import classes from '../styles/App.module.css'
import Form from './components/Form'
import Posts from './components/Posts'
import {useDispatch, useSelector} from "react-redux";
import {addTodo, decrement, increment, removeLastTodo} from "./Redux/Reducers";


const Index = () => {

  const count = useSelector(state => state.auth.count)
  const todos = useSelector(state => state.auth.todos)
  const dispatch = useDispatch()
  const [posts, setPosts] = useState([])

  const addAsyncTodo = () => {
    return async dispatch => {
        setTimeout(() => {
            dispatch(addTodo('ASYNC TODO'))
        }, 1000)
    }
}

  const removePost = id => {
    setPosts(posts.filter(item => item.id !== id))
  }
  const create = (newPost) => {
    setPosts([...posts, { ...newPost }]);
  };

  return (
    <div className={classes.app}>
      <h1 style={{textAlign:'center'}}>Welcome to Nextjs</h1>
      <button><Link href="/Apifetch"><a>API with useFetch</a></Link></button>
      <Form create={create}/>
      <Posts posts={posts} removePost={removePost}/>

      <div className="App">
            <h1 style={styles.h1}>Счетчик {count}</h1>
            <button style={styles.btn} onClick={() => dispatch(increment())}>Икремент</button>
            <button style={styles.btn} onClick={() => dispatch(decrement())}>Декремент</button>
            <button style={styles.btn} onClick={() => dispatch(removeLastTodo())}>Удалить последний ТУДУ</button>
            <button style={styles.btn} onClick={() => dispatch(addTodo(prompt()))}>Добавить ТУДУ</button>
            <button style={styles.btn} onClick={() => dispatch(addAsyncTodo())}>Добавить АСИНК ТУДУ</button>
            <ul>
                {todos.map(todo =>
                    <li style={styles.item} key={todo}>{todo}</li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Index

const styles = {
  h1: {
      margin: 20
  },
  btn: {
      margin: 20,
      padding: 5,
      color: 'orange',
      backgroundColor: 'black',
      fontSize: 25
  },
  item: {
      width: '800px',
      padding: 10,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'gray',
      listStyleType: 'none',
      marginTop:5
  }
}