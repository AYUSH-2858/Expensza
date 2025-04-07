import { useAuthContext } from '../context/userContext'
import { useState } from 'react'
import { toast } from 'sonner'

const useSignin = () => {
    const [loading,setLoading] = useState(false)
    const {setAuthUser}= useAuthContext()
  

    const login = async({email,password})=>{
        setLoading(true)
        try {
            const res = await fetch("/api/v1/user/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({email,password})
            })

            const data = await res.json()
            if(res.status !=200){
                toast("❌ Something went wrong", {
                    description: data.message,
                  })
                  return
            }

            localStorage.setItem("expensza-user", JSON.stringify(data))
            setAuthUser(data)
            toast("🎉Congratulation", {
                description: "Succesfully logged in",
              })
              return true
            
        } catch (error) {
            // console.log(error)
             toast("❌ Something went wrong", {
                    description: data.message,
                  })
        }finally{
            setLoading(false)
        }

        
    }

    return {loading,login}
}

export default useSignin
