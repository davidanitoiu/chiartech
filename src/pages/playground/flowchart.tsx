import InteractiveFlowchart from "@assets/projects/interactive-flowchart"
import Sidebar from "@assets/projects/interactive-flowchart/components/Sidebar"
import { store } from "@assets/projects/interactive-flowchart/utils"
import SEO from "@components/seo"
import { Container } from "@material-ui/core"
import React from "react"
import { Provider } from "react-redux"

const Flowchart = () => (
  <>
    <SEO title="Interactive Flowchart"/>
    <Provider store={store}>
      <Container>
        <InteractiveFlowchart />
      </Container>
      <Sidebar/>
    </Provider>
  </>
)

export default Flowchart
