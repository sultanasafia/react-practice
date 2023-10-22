import React , {useState,useEffect} from 'react'



const Navbar = ({ myClass }) => {
let [kuchbh,setkuchbh] = useState("Safia");
let [ name, setName] = useState("Maha")
// console.log(kuchbh);

function handleEvent (){
  setkuchbh("Hello");
  
}
function changeName(){
  setName("Maha Zaidi")
}

useEffect(()=>{
  console.log("Hello world");
},[name])


  return (
    <>
      {/* <div>Navbar</div>
      <h1>
        {myClass}
      </h1> */}
      
      <button onClick={handleEvent} >{kuchbh} </button>
      <button onClick={changeName}> {name}</button>
    </>
  )
}

export { Navbar }