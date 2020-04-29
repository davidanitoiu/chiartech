import InteractiveFlowchart from "@assets/projects/interactive-flowchart"
import React from "react"
import { Provider } from "react-redux"
import { store } from "@assets/projects/interactive-flowchart/utils"
import { Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core"
import Sidebar from "@assets/projects/interactive-flowchart/components/Sidebar"

const Pipeline = () => (
  <>
    <Provider store={store}>
      <Container>
        <InteractiveFlowchart />
      </Container>
      <Sidebar/>
    </Provider>
  </>
)

export default Pipeline
