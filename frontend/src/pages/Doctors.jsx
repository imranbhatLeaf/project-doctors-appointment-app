import React, { useContext,useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useNavigate } from "react-router-dom";

const Doctors = () => {
  const navigate = useNavigate()
  const { speciality } = useParams()
  const { doctors } = useContext(AppContext)
  const [filterDoc, setfilterDoc] = useState([])

  const ApplyFilter = () =>{
    if (speciality){
      setfilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else{
      setfilterDoc(doctors)
    }
  }

  useEffect(()=>{
      ApplyFilter()
  },[doctors,speciality])
  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors</p>
      <div className='flex flex-col sm:flex-row md:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality === 'General Physician'? navigate(`/doctors`) : navigate(`/doctors/General physician`)} className={`rounded transition-all cursor-pointer`}>General Physician</p>
          <p onClick={()=> speciality === 'Gynelogist'? navigate(`/doctors`) : navigate(`/doctors/Gynecologist`)} className={`rounded transition-all cursor-pointer`}>Gynelogist</p>
          <p onClick={()=> speciality === 'Dermatalogist'? navigate(`/doctors`) : navigate(`/doctors/Dermatologist`)} className={`rounded transition-all cursor-pointer`}>Dermatalogist</p>
          <p onClick={()=> speciality === 'Prediatrician'? navigate(`/doctors`) : navigate(`/doctors/Pediatricians`)} className={`rounded transition-all cursor-pointer`}>Prediatrician</p>
          <p onClick={()=> speciality === 'Neurologist'? navigate(`/doctors`) : navigate(`/doctors/Neurologist`)} className={`rounded transition-all cursor-pointer`}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist'? navigate(`/doctors`) : navigate(`/doctors/Gastroenterologist`)} className={`rounded transition-all cursor-pointer`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-3 gap-4 text-gray-600'>
          {
            filterDoc.map((item,index)=>(
              <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer'>
                  <img className='bg-blue-50' src={item.image} alt="" />
                  <div className='flex items-center gap-2 text-sm justify-center text-green-600'>
                      <p className='bg-green-600 rounded-full w-2 h-2'></p><p>Available</p>
                  </div>
                      <p className='flex items-center justify-center text-gray-600 font-medium text-lg'>{item.name}</p>
                      <p className='text-gray-500 text-sm flex justify-center items-center'>{item.speciality}</p>
              </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors