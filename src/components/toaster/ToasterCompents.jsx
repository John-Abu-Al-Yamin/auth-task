import React from 'react'
import { toast } from "sonner";


const ToasterCompents = () => {

    const oncliktoaster = () => {
        toast.success("Sign in successful!");
    }


  return (
    <div>
        <button onClick={oncliktoaster}>
            Toaster
        </button>
    </div>
  )
}

export default ToasterCompents