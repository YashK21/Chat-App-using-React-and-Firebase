import react, { useState } from 'react'
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db,auth ,storage} from '../firebase'
import { doc, setDoc } from "firebase/firestore"; 
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Register = () => {
    const [err,setErr] = useState(false)
  const handleSubmit = async e => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

const storageRef = ref(storage, 'images/rivers.jpg');

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(
  (error) => {
    setErr(true)
}, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      console.log('File available at', downloadURL);
      await updateProfile(res.user,{
        displayName:name,
        photoURL:downloadURL
      })
      await setDoc(doc(db, "users", res.user.uid), {
        uid:res.user.uid,  
        displayName:name,
          email,
          photoURL:downloadURL
        });
    });
  }
);
  
    } catch (error) {
        setErr(true)
    }
  }
  return (
    <>
      <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Chat App</span>
          <span className='title'>Register</span>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='name' />
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <input style={{ display: 'none' }} type='file' id='file' />
            <label htmlFor='file'>
              <img src={Add} alt='' />
              <span>Add an Avatar</span>
            </label>
            <button>Sign Up</button>
            {
                err && <span>Something went wrong!</span>
            }
          </form>
          <p>You do have an account? Login</p>
        </div>
      </div>
    </>
  )
}
export default Register
