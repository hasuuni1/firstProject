// In summary, setState is a method used to update the state of a React component. 
// It allows you to update the state based on user interactions or other events, and it triggers a re-render of the component to reflect the updated state.

// **************************************************************************
// useQuery :  We pass a key 'users' as the first argument to the hook, which is used to cache and manage the data.
                //  The second argument is a function that returns a Promise that resolves to the data we want to fetch.
// ****************



                // The useQuery hook returns an object with three properties:


                // isLoading: a boolean value that indicates whether the data is currently being fetched.
                // error: an error object if the data fetching failed.
                // data: the data fetched from the API, which is undefined initially, and then updated once the data is fetched.


                    //defaultOptions = allows you to put some configuration i.e queries and mutation configaration
                    // 1. queries is just read from crud
                    // 2.mutation is any kind of API request where you change data or you create data or update or delete data

// ************************************

        // createContext: is a function that creates a new context object that can be used to share data between components
        // //  without passing props down through the component tree




        // useContext is a hook provided by React that allows you to consume a context object created by the createContext function. 
        // It provides a way for components to access shared data and state without having to pass props down through the component tree.  
        
        // AppContext  is a context object that is used to share data and state across components in a React application.




        // AppContext.Provider : is a component provided by the AppContext object created using the createContext function in React. 
        // It is used to provide a value to the context and make it available to child components.