import { useEffect } from "react";

const useTitle = (title) =>{
    title? title= ' |'+title : ''
    useEffect(()=>{
        document.title = `MovieZone${title}`;   
},[title])
}

export default useTitle;