import * as React from "react";
import { useUsersQuery } from "../generated/graphql";

export interface HomeProps { }

export const Home: React.SFC<HomeProps> = () => {
  const { data } = useUsersQuery({ fetchPolicy: "network-only" }) //dont use caching with this request

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>Users:</div>
      <ul>
        {data.users.map(x => {
          return (
            <li key={x.id}>
              {x.id} <br />
              {x.firstname} {x.lastname} <br />
              {x.email}
            </li>
          )
        })}
      </ul>
    </div>
  )
};
