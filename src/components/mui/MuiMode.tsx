import React from "react"
import { Typography, useTheme } from "@mui/material"

function MuiMode() {
  const theme = useTheme()
  return <Typography variant="h1">{`${theme.palette.mode} mode`}</Typography>
}

export default MuiMode
