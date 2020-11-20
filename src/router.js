import { render as StartPageRender } from "./startPage";
import { render as ResultPageRender } from "./resultPage";

export default function router() { 
    const hashValue = location.hash.replace('#', '');
    if(hashValue==="result") {
        const score = localStorage.getItem("score")
        const avg = localStorage.getItem("avg");
        localStorage.clear();
        
        if(score && avg ) ResultPageRender( score, avg );
        else location.hash = "#game";

    } else if(hashValue==="game") {
        StartPageRender();
    } else {
        location.hash = "#game";
    }
}