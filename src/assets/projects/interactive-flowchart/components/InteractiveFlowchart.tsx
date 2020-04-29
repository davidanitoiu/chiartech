import PipelineNodeInner from "@assets/projects/interactive-flowchart/components/PipelineNodeInner"
import { validateLink } from "@assets/projects/interactive-flowchart/utils"
import { actions, FlowChart } from "@mrblenny/react-flow-chart"
import { mapValues } from "lodash"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { executeChartAction } from "../utils/reducers/pipeline"

const InteractiveFlowchart = () => {
    const dispatch = useDispatch();
  const {chart} = useSelector(state => state.pipeline);

  const callbacks = mapValues(actions, (action: any) =>
  (...args: any) => dispatch(executeChartAction({action: action(...args)})))  as typeof actions;

  return (
    <>
      <FlowChart
        chart={chart}
        callbacks={callbacks}
        Components={{
          NodeInner: PipelineNodeInner,
        }}
        config={{
          snapToGrid: true,
          validateLink,
        }}
      />
    </>
  )
}

export default InteractiveFlowchart
