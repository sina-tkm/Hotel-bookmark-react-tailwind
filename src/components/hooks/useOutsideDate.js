import { useEffect } from "react";

export default function useOutsideDate(ref,exeption,cb){
    useEffect(()=>{
        function handleOutsideDate(event){
            if(ref.current && !ref.current.contains(event.target) && event.target.id !== exeption){
                cb()
            }
        }

        document.addEventListener("click",handleOutsideDate)

        return ()=>{
        document.removeEventListener("click",handleOutsideDate)

        }
    },[ref,cb,exeption])
}