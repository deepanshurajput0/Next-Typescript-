'use client'
import React, { useState } from 'react'
interface Details{
    name:string,
    age:number
}

interface Info{
    role:string,
    exp:number
}

const page:React.FC<Details> = (props) => {
    const [counter,setCounter] = useState<Info>({
        role:'Nil Bekne Wala',
        exp:2
    })

    function changeInfo(){
        setCounter({
            role:'Software Developer',
            exp:1
        })
    }
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
         e.preventDefault()
         alert('form submitted successfully')
    }
    return (
    <div>
        <h1>My name {props.name} is Deepanshu & Age is {props.age} </h1>
        <h1>{counter.role}</h1>
        <h1>{counter.exp}</h1>
        <button onClick={changeInfo} >Inc</button>
        {/* <button onClick={()=>setCounter(counter-1)} >Dec</button> */}

        <form  onSubmit={handleSubmit} >
            <input type="email" placeholder='email' id="" /> <br />
            <input type="password" placeholder='password' id="" /> <br />
            <button type='submit' >Submit</button>
        </form>
    </div>
  )
}

export default page


