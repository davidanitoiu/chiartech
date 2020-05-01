import React from "react"
import { INodeInnerDefaultProps } from "@mrblenny/react-flow-chart"
import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core"

const useStyles = makeStyles<Theme>(theme => ({
  pipelineCard: {
    color: theme.palette.primary.main,
    textAlign: "center",
  },
}))

const PipelineNodeInner = ({ node }: INodeInnerDefaultProps) => {
  const classes = useStyles()
  const { title } = node.properties

  return (
    <div className={classes.pipelineCard}>
      <p>{title}</p>
    </div>
  )
}

export default PipelineNodeInner
