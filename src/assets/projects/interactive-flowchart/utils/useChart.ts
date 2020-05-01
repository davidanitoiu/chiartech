import { actions, IChart, IFlowChartCallbacks } from "@mrblenny/react-flow-chart";
import { AnyAction, createAction, createReducer } from "@reduxjs/toolkit";
import { mapValues } from "lodash";
import { Reducer, useReducer } from "react";
import { chartBase } from "./pipelineChart";

export const useChart = (chart = chartBase): [IChart, IFlowChartCallbacks] => {
  const initialState = chart;

  const executeChartAction = createAction('executeChartAction', ({ action }) => ({
    payload: {
      action
    }
  }));
  const reducer = createReducer(initialState, {
    [executeChartAction.type]: (state, { payload }) => payload.action(state),
  })

  const [state, dispatch] = useReducer<Reducer<IChart, AnyAction>>(reducer, initialState);

  const callbacks: IFlowChartCallbacks = mapValues(actions, (action: any) => (...args: any) =>
    dispatch(executeChartAction({ action: action(...args) }))
  ) as typeof actions

  return [state, callbacks];
}