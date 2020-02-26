import React, { useState } from "react";
// import { useRegisterMutation } from "../generated/graphql";
import { RouteComponentProps } from "react-router-dom";

export const Register: React.SFC<RouteComponentProps> = ({ history }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [register] = useRegisterMutation()

  return (
    <div></div>
    // <form onSubmit={async e => {
    //   e.preventDefault()
    //   console.log("Form submitted ✅")
    //   console.log(email, password)
    //   const response = await register({
    //     variables: {
    //       firstname,
    //       lastname,
    //       email,
    //       password
    //     }
    //   })
    //   console.log(`User registered! ✅`)
    //   console.log(response)
    //   history.push('/')
    // }}
    // >
    //   <div>
    //     <input
    //       type="text"
    //       value={firstname}
    //       placeholder="Your firstname..."
    //       onChange={e => setFirstname(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       value={lastname}
    //       placeholder="Your lastname..."
    //       onChange={e => setLastname(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       value={email}
    //       placeholder="Your email..."
    //       onChange={e => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       value={password}
    //       placeholder="Your password..."
    //       onChange={e => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Register</button>
    //   </div>
    // </form>
  );
};
