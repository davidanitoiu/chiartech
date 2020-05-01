import PipelineNodeInner from "@assets/projects/interactive-flowchart/components/PipelineNodeInner"
import {
  useChart,
  validateLink,
} from "@assets/projects/interactive-flowchart/utils"
import { FlowChart } from "@mrblenny/react-flow-chart"
import React from "react"
import { Container } from "@material-ui/core"
import Sidebar from "./Sidebar"

const InteractiveFlowchart = () => {
  const [chart, chartCallbacks] = useChart()

  const callbacks = {
    ...chartCallbacks,
    onDragCanvas: () => {}
  }

  return (
    <>
      <Container>
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
        <Sidebar chart={chart} />
      </Container>
    </>
  )
}

export default InteractiveFlowchart
