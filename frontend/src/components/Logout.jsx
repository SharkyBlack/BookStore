import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { toast } from 'react-hot-toast';
function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            
            toast.success("Logout Successfully");
            
          setTimeout(() => {
            window.location.reload();
          
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 2000)
            
        }catch(err){
            toast.error("Error in logout"+err.message);
            setTimeout(() => {},2000)
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
      onClick={handleLogout}>Logout</button>

    </div>
  )
}

export default Logout
