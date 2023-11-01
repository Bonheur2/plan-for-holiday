// import axios from "axios";
// import React, { createContext, useEffect, useState } from "react";

// const context = {
//   user: null,
//   setUser: () => {},
// };


// export const UserContent = createContext(context);
// export default function UserProvider({ children }) {
//   // const [user, SetUser] = useState(context.user);
//   // const FetchData = async()=>{
//   //   try {
//   //     const { data } = await axios.get("https://holiday-planner-4lnj.onrender.com/api/v1/auth/users");
//   //     if(data){
//   //       console.log({data});
//   //       SetUser(data)
//   //     }
//   //   } catch (error) {
//   //     console.error({error})
//   //   }
//   // }
//   // useEffect(()=>{
//   //   FetchData()
//   // },[])

 


//   return (
//     <UserContent.Provider value={{ user, SetUser }}>
//       {children}
//     </UserContent.Provider>
//   )
// }
