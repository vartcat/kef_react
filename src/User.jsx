import { green } from "@mui/material/colors";
import Name from "./Name";
import { ageState } from "./atoms";
import { useRecoilValue } from "recoil";
import { presentationSelector } from "./selector";

export default function User(){

    const userAge = useRecoilValue(ageState)
    const presentation = useRecoilValue(presentationSelector)
    
    return(
        <div style={{ display: "flex", flexDirection: "column", border: "2px solid green"}}>
            <span>Utilisateur</span>
            <span>Age : {userAge}</span>
            <Name/>
            <span>{presentation}</span>
        </div>
    )
}

{/* METHOD REACT QUERY*/}

// import { useMutation, useQuery } from "@tanstack/react-query";

// export default function User() {
//   const { isLoading, error, data } = useQuery({
//     queryKey: ["user"],
//     queryFn: () =>
//       fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
//         res.json()
//       ),
//   });

//   const mutation = useMutation((newName) =>
//     fetch("https://jsonplaceholder.typicode.com/users/1", {
//       method: "PATCH",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({
//         name: newName,
//       }),
//     }).then((res) => res.json())
//   );

//   const handleNameChange = () => {
//     const newName = prompt('Entres un nouveau nom')

//     if(newName){
//         mutation.mutate(newName)
//     }
//   }

//   if (isLoading) return "Chargement ...";

//   if (error) return "Une erreur est survenue" + error.message;

//   if(mutation.isLoading) return "Mutation chragement ..."

//   if(mutation.error) return "Une erreur de mutation est survenue" + mutation.error.message

//   if(mutation.isSuccess){
//     data.name = mutation.data.name
//   }

//   console.log(data);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         border: "2px solid black",
//       }}
//     >
//       <h1>Utilisateur {data.id}</h1>
//       <span>Name : {data.name}</span>
//       <span>Mail : {data.email}</span>
//       <span>Tel : {data.phone}</span>
//       <button onClick={handleNameChange}>Changez le nom</button>
//     </div>
//   );
// }
