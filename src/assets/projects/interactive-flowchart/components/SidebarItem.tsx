import React from "react"
import { ListItem, ListItemText, makeStyles, Theme } from "@material-ui/core"
import { INode } from "@mrblenny/react-flow-chart"

interface ISidebarItemProps {
  type: string
  ports: INode["ports"]
  properties?: any
}

const useStyles = makeStyles<Theme>(theme => ({
    sidebarItem: {
        cursor: "grab"
    }
}))

export const SidebarItem = ({ type, ports, properties }: ISidebarItemProps) => {
  const classes = useStyles()

  return (
    <ListItem
      className={classes.sidebarItem}
      draggable={true}
      onDragStart={event => {
        event.dataTransfer.setData(
          "react-flow-chart",
          JSON.stringify({ type, ports, properties })
        )
      }}
    >
      <ListItemText primary={properties.title} />
    </ListItem>
  )
}
