import { useRecoilState } from "recoil";
import { nameState } from "./atoms";

export default function Name(){

    const [name, setName] = useRecoilState(nameState)

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <span>{name}</span>
            <input type="text" onChange={handleChange}/>
        </>
    )
}







// import { nameContext } from "./App"
// import { useContext } from "react"

// export default function Name() {

//     const name = useContext(nameContext)
//     return(
//         <span>{name}</span>
//     )
// }