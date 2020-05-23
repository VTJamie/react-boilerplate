import { createStore, combineReducers, AnyAction } from 'redux';

export interface ExampleAction extends AnyAction {
    exampleData: string
}

export interface OtherAction extends AnyAction {
    somethingelse: string
}

export interface ExampleState {
    data: string
}

// The User Reducer
const exampleReducer = (state: ExampleState = { data: 'empty' }, action: ExampleAction): ExampleState => {
  return {
      ...state,
      data: action.exampleData
  };
}

const otherReducer = (state: any, action: OtherAction): any => {
    console.log(action);
    return {
        ...state
    };
};

// Combine Reducers
const reducers = combineReducers({
    example: exampleReducer,
    other: otherReducer
});
  
export const store = createStore(reducers);

export type Store = ReturnType<typeof reducers>;