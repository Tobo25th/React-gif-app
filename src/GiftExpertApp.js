import {useState} from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GiftExpertApp = ()=>{
  //  const categories = ["Baki","Berserk","Dragon ball"];
    const [categories, setCategories] = useState([""]);
    
    return(
        <>
            <h1>GiftExpertApp</h1>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <ul>
                {
                    categories.map(category =>(
                        <GifGrid key={category} category={category}/>
                    ))

                }
            </ul>
        </>
    );
}
export default GiftExpertApp;