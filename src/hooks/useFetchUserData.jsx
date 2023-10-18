import { useState,useEffect } from "react"

export default function useFetchUserData(url) {
const [data,setData] = useState([])
  const fetchUserData = () => {
     fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data.manuColumns[0].columnWomen)
      })
      .catch(error=>{
        console.log(error)
      })
    }
    
  useEffect(() => {
     fetchUserData()
  }, [])
  return data
}

