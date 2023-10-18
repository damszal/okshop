import axios from 'axios'
import { useState,useEffect} from 'react'

export default function useGetKidsData(url) {

    const [kidsData, setKidsData] = useState([]);

    const getKidsData = ()=> {
    axios.get(url).
        then((res)=>{
        return res.data.manuColumns[2].columnKids
        }).then((data)=>{
        setKidsData(data)
        }).
        catch(function (error) {
            console.log(error);
          })
    }
    useEffect(() => {
    getKidsData()
    }, [])
  return kidsData
}
