
import { useState } from 'react'
import { toast } from 'sonner'

const useSignUp = () => {
    const [loading,setLoading] = useState(false)
    const registerUser = async(inputs)=>{
        setLoading(true)
        try {
            const res = await fetch("/api/v1/user/register",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(inputs)
            })

            const data = await res.json()
            console.log(data)
            if(res.status !=200){
                toast("❌ Something went wrong", {
                    description: data.message,
                  })
                  return
            }
         
            toast("🎉Congratulation", {
                description: "Account created succesfully",
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

    return {loading,registerUser}
}

export default useSignUp
