import { chartSimple, validateLink } from "@assets/projects/interactive-flowchart/utils"
import PipelineNodeInner from "@components/pipeline/PipelineNodeInner"
import { actions, FlowChart } from "@mrblenny/react-flow-chart"
import { cloneDeep, mapValues } from "lodash"
import React, { useState } from "react"

const InteractiveFlowchart = () => {
  const [chart] = useState(cloneDeep(chartSimple))

  const stateActions = mapValues(actions, (func: any) => (...args: any) =>
    console.log("magic")
  ) as typeof actions

  return (
    <>
      <FlowChart
        chart={chart}
        callbacks={stateActions}
        Components={{
          NodeInner: PipelineNodeInner,
        }}
        config={{
          validateLink,
        }}
      />
    </>
  )
}

export default InteractiveFlowchart
