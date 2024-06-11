import { useEffect } from "react";


export default function useOutsideClick(ref,exeption,cd){

    useEffect(()=>{
        function handleOutSide(event){
            if(ref.current && !ref.current.contains(event.target) && event.target.id !== exeption){
                cd();
            }
        }
        document.addEventListener("mousedown",handleOutSide)

        return ()=>{
        document.removeEventListener("mousedown",handleOutSide)
        }
    },[ref,cd,exeption])
}