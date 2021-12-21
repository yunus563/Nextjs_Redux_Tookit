import React, {useState} from 'react'
import classes from './All.module.css'
import { v4 as uuidv4 } from 'uuid';

const Formik = ({create}) => {
  const [info, setInfo] = useState({name:'', comment:''})

  function GetInfo (event) {
    event.preventDefault()
    const newPost = {
      ...info, id: uuidv4()
    }
    if(info.name==="" && info.comment ===""){
      alert("Please check inputs...")
    }
    else{
      create(newPost)
      setInfo({name:'', comment:''})
    }
  }

  return (
    <form onSubmit={GetInfo} className={classes.form}>
      <h3>Create Your Post</h3>
      <input required  type="text" placeholder='User...' value={info.name} onChange={e => setInfo({...info, name: e.target.value})}/>
      <input required  type="textarea" placeholder='Comment...' value={info.comment} onChange={e => setInfo({...info, comment: e.target.value})}/>
      <div><button  type='submit'>Submit</button></div>
    </form>
  )
}

export default Formik