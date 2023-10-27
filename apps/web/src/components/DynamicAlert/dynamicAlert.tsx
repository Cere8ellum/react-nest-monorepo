import React, { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Fade from "@mui/material/Fade";

export enum ESeverity {
  error = "error",
  warning = "warning",
  info = "info",
  success = "success",
}

type TProps = {
  isVisible: boolean;
  title: string;
  text: string;
  type: ESeverity;
  onHide: () => void;
};

export default function DynamicAlert({ ...props }: TProps) {
  const [visibility, setVisibility] = useState(props.isVisible);

  return (
    <Fade
      in={visibility} // Condition to make it appear
      timeout={{ enter: 1000, exit: 1000 }} // Duration of transition when the element is getting appeared and disappeard
      addEndListener={() => {
        setTimeout(() => {
          setVisibility(false);
          props.onHide();
        }, 2000);
      }}
    >
      <MuiAlert severity={props.type} variant="standard" className="alert">
        <AlertTitle>{props.title}</AlertTitle>
        {props.text}
      </MuiAlert>
    </Fade>
  );
}
