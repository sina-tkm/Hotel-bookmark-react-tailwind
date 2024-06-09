import { useEffect } from "react";


export default function useOutsideClick(ref,exeption,cb){

    useEffect(()=>{
        function handleOutSide(event){
            if(ref.current && !ref.current.contains(event.target) && event.target.id !== exeption){
                cb();
            }
        }
        document.addEventListener("mousedown",handleOutSide)

        return ()=>{
            document.removeEventListener("mousedown",handleOutSide)
        }
    },[ref,cb,exeption])
}