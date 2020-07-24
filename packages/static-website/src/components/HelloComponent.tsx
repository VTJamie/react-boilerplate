import * as React from 'react';
import { connect } from 'react-redux';
import { ExampleAction, Store } from '../store';
import { AnyAction } from 'redux';

export type HelloViewProps = HelloViewState & HelloViewActions;

export interface HelloViewState {
    mydata: string
}

export interface HelloViewActions {
    doSomething: () => void
}

export const HelloView = (props: HelloViewProps) => 
(
    <h1 onClick={props.doSomething}>Hello from { props.mydata }!</h1>
);

function mapToProps(store: Store): HelloViewState {
    return {
        mydata: store.example.data
    };
}

function mapToActions(dispatch: (a: AnyAction) => any): HelloViewActions { 
    return {
        doSomething: () => {
            const exampleAction: ExampleAction = {
                type: 'DOING SOMETHING',
                exampleData: 'myvalue'
            };
            dispatch(exampleAction);
        }
    };
}

export default connect(mapToProps, mapToActions)(HelloView);