import PipelineNodeInner from "@assets/projects/interactive-flowchart/components/PipelineNodeInner"
import { chartSimple, validateLink } from "@assets/projects/interactive-flowchart/utils"
import { actions, FlowChart } from "@mrblenny/react-flow-chart"
import { cloneDeep, mapValues } from "lodash"
import React, { useState } from "react"

const InteractiveFlowchart = () => {
  const [chart] = useState(cloneDeep(chartSimple))

  const callbacks = mapValues(actions, (func: any) => (...args: any) =>
    console.log("magic is happening")
  ) as typeof actions

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
