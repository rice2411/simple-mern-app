import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

export default function Header() {
  const theme = useTheme();

  return (
    <Typography
      variant="h4"
      align="center"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: "white",
        marginBottom: "20px",
        fontWeight: "lighter",
        padding: "5px 0",
      }}
    >
      Blog
    </Typography>
  );
}
