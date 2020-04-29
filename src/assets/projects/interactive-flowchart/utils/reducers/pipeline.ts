import {createAction,createReducer} from "@reduxjs/toolkit";

const initialState = {
    environments: ['Dev','Test','Acc','Prod'],
    chart: {
        offset: {
            x: 0,
            y: 0
        },
        nodes: {},
        links: {},
        selected: {},
        hovered: {}
    }
};

export const executeChartAction = createAction('pipeline/executeChartAction');
export const resetPipeline = createAction('pipeline/resetPipeline');

const PipelineReducer = createReducer(initialState,{
    [executeChartAction.type]: (state,{payload}) => {
        payload.action(state.chart);
    },
    [resetPipeline.type]: () => initialState
});

export default PipelineReducer;
export type PipelineReducerState = ReturnType<typeof PipelineReducer>
