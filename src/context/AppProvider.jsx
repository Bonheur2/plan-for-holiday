import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

export const AuthContext = createContext({});

const AppProvider = ({ children }) => {
   let url = "https://holiday-planner-4lnj.onrender.com";
  const [myusers, setMyusers] = useState([]);
  const [myTours, setMyTours] = useState([]);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const result = await axios.get(
          "https://holiday-planner-4lnj.onrender.com/api/v1/tour"
        );
        //console.log(result.data)
        setMyTours(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchuser();
  }, []);

  let UserData = JSON.parse(localStorage.getItem("data"));
  let token = UserData?.access_token;
  let Email = UserData?.user?.email;

// fetch all contact made by users

  const { data: fetchContact } = useQuery({
    queryKey: ["contact"],
    queryFn: async () => {
      const response = await axios.get(url + `/api/v1/contact`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response.data)

      return response.data;
    },
    onSuccess: (data) => {
      console.log("fetched all conatact", response.data);
    },
  });



  //fetch all books in dashboard


  
  const { data: fetchBook } = useQuery({
    queryKey: ["Booking"],
    queryFn: async () => {
      const resp = await axios.get(url + `/api/v1/booking/view`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(resp.data)

      return resp.data;
    },
    onSuccess: (data) => {
      console.log("fetched all conatact", response.data);
    },
  });



// fetch all users data in dashboard
const { data: fetchUsersData } = useQuery({
  queryKey: ["users"],
  queryFn: async () => {
    const response = await axios.get(url + `/api/v1/auth/users`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  },
  onSuccess: (data) => {
    console.log("users fetch", response.data);
  },
});

const {
  data: Loged_user,
  isError,
  isLoading,
} = useQuery({
  queryKey: ["loged_user"],
  queryFn: async () => {
    const res = await axios.get(
      url + `/api/v1/auth/users/getOne?fieldName=email&value=${Email} `,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (isError) {
      return <h1>Sorry there is an Error</h1>;
    }
    if (isLoading) {
      return <h1>loading...</h1>;
    }
    console.log("asdfghjk", res.data);
    return res.data;
  },
});
console.log("Loged user!", Loged_user);


//   useEffect(() => {
//     const fetchuser = async () => {
//       const res = await axios.get(
//         "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
//         {
//           headers: {
//             Authorization: `Bearer ${JSON.parse(
//               localStorage.getItem("token")
//             )}`,
//           },
//         }
//       );
//     };

//     fetchuser();
//   }, []);

  return (
    <AuthContext.Provider value={{ myTours, fetchUsersData, fetchBook, Loged_user, fetchContact }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AppProvider;
