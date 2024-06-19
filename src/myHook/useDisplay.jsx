import { renderHook } from "@testing-library/react";
import { useEffect, useState } from "react";

function useDisplay(){
    let [height,setHeight] = useState(window.innerHeight);
    let [width,setWidth] = useState(window.innerWidth);
    function calcSize(){
        {setHeight(window.innerHeight);setWidth(window.innerWidth)};
    }
    useEffect(()=>{
        window.addEventListener('resize',calcSize)
        return (() => {
            window.removeEventListener('resize',calcSize)
        });
    },[]);
    return [height,width];
}
export default useDisplay;