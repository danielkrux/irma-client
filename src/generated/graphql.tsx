import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type CreateIncidentDto = {
  title: Scalars['String'],
  description: Scalars['String'],
  team_id: Scalars['ID'],
};

export type DeleteIncidentDto = {
  id: Scalars['ID'],
};

export type Incident = {
   __typename?: 'Incident',
  id: Scalars['ID'],
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  assignedTeam: Team,
};

export type LoginResponse = {
   __typename?: 'LoginResponse',
  accesToken: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  register: Scalars['Boolean'],
  login: LoginResponse,
  createIncident: Incident,
  updateIncident: Incident,
  deleteIncident: Scalars['Boolean'],
};


export type MutationRegisterArgs = {
  password: Scalars['String'],
  email: Scalars['String'],
  lastname: Scalars['String'],
  firstname: Scalars['String']
};


export type MutationLoginArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};


export type MutationCreateIncidentArgs = {
  title: Scalars['String'],
  description: Scalars['String'],
  team_id: Scalars['ID']
};


export type MutationUpdateIncidentArgs = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  team_id?: Maybe<Scalars['ID']>
};


export type MutationDeleteIncidentArgs = {
  id: Scalars['ID']
};

export type Query = {
   __typename?: 'Query',
  hello: Scalars['String'],
  users: Array<User>,
  incidents: Array<Incident>,
  incident: Incident,
};


export type QueryIncidentArgs = {
  id: Scalars['String']
};

export type Team = {
   __typename?: 'Team',
  _id: Scalars['ID'],
  name: Scalars['String'],
};

export type TeamInput = {
  _id: Scalars['ID'],
  name: Scalars['String'],
};

export type UpdateIncidentDto = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  team_id?: Maybe<Scalars['ID']>,
};

export type User = {
   __typename?: 'User',
  _id: Scalars['ID'],
  firstname: Scalars['String'],
  lastname: Scalars['String'],
  email: Scalars['String'],
};

export type UserInput = {
  _id: Scalars['ID'],
  firstname: Scalars['String'],
  lastname: Scalars['String'],
  email: Scalars['String'],
};

export type IncidentsQueryVariables = {};


export type IncidentsQuery = (
  { __typename?: 'Query' }
  & { incidents: Array<(
    { __typename?: 'Incident' }
    & Pick<Incident, 'id' | 'title' | 'description'>
    & { assignedTeam: (
      { __typename?: 'Team' }
      & Pick<Team, '_id' | 'name'>
    ) }
  )> }
);

export type IncidentQueryVariables = {
  id: Scalars['String']
};


export type IncidentQuery = (
  { __typename?: 'Query' }
  & { incident: (
    { __typename?: 'Incident' }
    & Pick<Incident, 'id' | 'title'>
  ) }
);

export type CreateIncidentMutationVariables = {
  title: Scalars['String'],
  description: Scalars['String'],
  team_id: Scalars['ID']
};


export type CreateIncidentMutation = (
  { __typename?: 'Mutation' }
  & { createIncident: (
    { __typename?: 'Incident' }
    & Pick<Incident, 'id'>
  ) }
);

export type UpdateIncidentMutationVariables = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  team_id?: Maybe<Scalars['ID']>
};


export type UpdateIncidentMutation = (
  { __typename?: 'Mutation' }
  & { updateIncident: (
    { __typename?: 'Incident' }
    & Pick<Incident, 'id' | 'title' | 'description'>
    & { assignedTeam: (
      { __typename?: 'Team' }
      & Pick<Team, '_id' | 'name'>
    ) }
  ) }
);

export type DeleteIncidentMutationVariables = {
  id: Scalars['ID']
};


export type DeleteIncidentMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteIncident'>
);


export const IncidentsDocument = gql`
    query Incidents {
  incidents {
    id
    title
    description
    assignedTeam {
      _id
      name
    }
  }
}
    `;

/**
 * __useIncidentsQuery__
 *
 * To run a query within a React component, call `useIncidentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useIncidentsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIncidentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useIncidentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IncidentsQuery, IncidentsQueryVariables>) {
        return ApolloReactHooks.useQuery<IncidentsQuery, IncidentsQueryVariables>(IncidentsDocument, baseOptions);
      }
export function useIncidentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IncidentsQuery, IncidentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IncidentsQuery, IncidentsQueryVariables>(IncidentsDocument, baseOptions);
        }
export type IncidentsQueryHookResult = ReturnType<typeof useIncidentsQuery>;
export type IncidentsLazyQueryHookResult = ReturnType<typeof useIncidentsLazyQuery>;
export type IncidentsQueryResult = ApolloReactCommon.QueryResult<IncidentsQuery, IncidentsQueryVariables>;
export const IncidentDocument = gql`
    query Incident($id: String!) {
  incident(id: $id) {
    id
    title
  }
}
    `;

/**
 * __useIncidentQuery__
 *
 * To run a query within a React component, call `useIncidentQuery` and pass it any options that fit your needs.
 * When your component renders, `useIncidentQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIncidentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIncidentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IncidentQuery, IncidentQueryVariables>) {
        return ApolloReactHooks.useQuery<IncidentQuery, IncidentQueryVariables>(IncidentDocument, baseOptions);
      }
export function useIncidentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IncidentQuery, IncidentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IncidentQuery, IncidentQueryVariables>(IncidentDocument, baseOptions);
        }
export type IncidentQueryHookResult = ReturnType<typeof useIncidentQuery>;
export type IncidentLazyQueryHookResult = ReturnType<typeof useIncidentLazyQuery>;
export type IncidentQueryResult = ApolloReactCommon.QueryResult<IncidentQuery, IncidentQueryVariables>;
export const CreateIncidentDocument = gql`
    mutation createIncident($title: String!, $description: String!, $team_id: ID!) {
  createIncident(title: $title, description: $description, team_id: $team_id) {
    id
  }
}
    `;
export type CreateIncidentMutationFn = ApolloReactCommon.MutationFunction<CreateIncidentMutation, CreateIncidentMutationVariables>;

/**
 * __useCreateIncidentMutation__
 *
 * To run a mutation, you first call `useCreateIncidentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIncidentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIncidentMutation, { data, loading, error }] = useCreateIncidentMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      team_id: // value for 'team_id'
 *   },
 * });
 */
export function useCreateIncidentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateIncidentMutation, CreateIncidentMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateIncidentMutation, CreateIncidentMutationVariables>(CreateIncidentDocument, baseOptions);
      }
export type CreateIncidentMutationHookResult = ReturnType<typeof useCreateIncidentMutation>;
export type CreateIncidentMutationResult = ApolloReactCommon.MutationResult<CreateIncidentMutation>;
export type CreateIncidentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateIncidentMutation, CreateIncidentMutationVariables>;
export const UpdateIncidentDocument = gql`
    mutation updateIncident($id: ID!, $title: String, $description: String, $team_id: ID) {
  updateIncident(id: $id, title: $title, team_id: $team_id) {
    id
    title
    description
    assignedTeam {
      _id
      name
    }
  }
}
    `;
export type UpdateIncidentMutationFn = ApolloReactCommon.MutationFunction<UpdateIncidentMutation, UpdateIncidentMutationVariables>;

/**
 * __useUpdateIncidentMutation__
 *
 * To run a mutation, you first call `useUpdateIncidentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIncidentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIncidentMutation, { data, loading, error }] = useUpdateIncidentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      team_id: // value for 'team_id'
 *   },
 * });
 */
export function useUpdateIncidentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateIncidentMutation, UpdateIncidentMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateIncidentMutation, UpdateIncidentMutationVariables>(UpdateIncidentDocument, baseOptions);
      }
export type UpdateIncidentMutationHookResult = ReturnType<typeof useUpdateIncidentMutation>;
export type UpdateIncidentMutationResult = ApolloReactCommon.MutationResult<UpdateIncidentMutation>;
export type UpdateIncidentMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateIncidentMutation, UpdateIncidentMutationVariables>;
export const DeleteIncidentDocument = gql`
    mutation deleteIncident($id: ID!) {
  deleteIncident(id: $id)
}
    `;
export type DeleteIncidentMutationFn = ApolloReactCommon.MutationFunction<DeleteIncidentMutation, DeleteIncidentMutationVariables>;

/**
 * __useDeleteIncidentMutation__
 *
 * To run a mutation, you first call `useDeleteIncidentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIncidentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIncidentMutation, { data, loading, error }] = useDeleteIncidentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteIncidentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteIncidentMutation, DeleteIncidentMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteIncidentMutation, DeleteIncidentMutationVariables>(DeleteIncidentDocument, baseOptions);
      }
export type DeleteIncidentMutationHookResult = ReturnType<typeof useDeleteIncidentMutation>;
export type DeleteIncidentMutationResult = ApolloReactCommon.MutationResult<DeleteIncidentMutation>;
export type DeleteIncidentMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteIncidentMutation, DeleteIncidentMutationVariables>;