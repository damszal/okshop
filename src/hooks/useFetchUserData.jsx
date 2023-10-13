import { useState,useEffect } from "react"

export default function useFetchUserData() {
    const [data,setData] = useState([])
  const fetchUserData = () => {
     fetch("https://damszal.github.io/data.geojson")
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

