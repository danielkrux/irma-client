import React from "react";
// import { useLoginMutation } from "../generated/graphql";
import { RouteComponentProps } from "react-router-dom";

export const Login: React.SFC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [login] = useLoginMutation()

  return (
    <div>
      
    </div>
    // <form onSubmit={async e => {
    //   e.preventDefault()
    //   console.log("Form submitted ✅")
    //   console.log(email, password)
    //   const response = await login({
    //     variables: {
    //       email,
    //       password
    //     }
    //   })
    //   console.log(`User logged in! ✅`)
    //   console.log(response)
    //   history.push('/')
    // }}
    // >
    //   <div>
    //     <input
    //       type="text"
    //       value={email}
    //       placeholder="email"
    //       onChange={e => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       value={password}
    //       placeholder="password"
    //       onChange={e => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Register</button>
    //   </div>
    // </form>
  );
};
