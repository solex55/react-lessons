import './App.css'; 
import React, { useReducer } from 'react'
import FunctionalHook from './Components/FunctionalHook'
import PrevState from './Components/PrevState'
import HookObject from './Components/HookObject'
import HookArray from './Components/HookArray'
import HeadEffect from './Components/HeadEffect'
import MouseHook from './Components/MouseHook'
import IntervalCounter from './Components/IntervalCounter'
import DataFetching from './Components/DataFetching'
import SingleFetch from './Components/SingleFetch'
import ContextA from './Components/ContextA'
import Reduce from './Components/Reduce'
import Reducer from './Components/Reducer'
import ContextC from './Components/ContextC'
import ContextD from './Components/ContextD'
import ContextE from './Components/ContextE'
import Callback from './Components/Callback';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state;
    } 
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <FunctionalHook />
      <PrevState />
      <HookObject />
      <HookArray />
      <HeadEffect />
      <MouseHook />
      <IntervalCounter />
      <DataFetching />
      <SingleFetch />

      <UserContext.Provider value={'solomon'}>
        <ChannelContext.Provider value={'Developer'}>
          <ContextA />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <Reduce />
      <Reducer />

      <div> Multiple Counter {count}</div>
      <CountContext.Provider value={{contextCounter: count, dispatchCounter: dispatch }}>
        <ContextC />
        <ContextD />
        <ContextE />
      </CountContext.Provider>

      <Callback />
    </div>
  );
}

export default App;
