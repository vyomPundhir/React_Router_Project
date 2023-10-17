import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData()
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/vyomPundhir')
  //   .then(response => response.json())
  //   .then(data=>{
  //     console.log(data);
  //     setData(data)
  //   })
  // }, [])
  
  return (
    <div className='flex flex-col gap-[20px] items-center m-4 text-center bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git Picture" className='w-[200px] rounded-full pb-[10px] '/>
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async() => {
  const response = await fetch('https://api.github.com/users/vyomPundhir')
  return response.json()
}