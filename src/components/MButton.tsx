import { Button } from "@mui/material";
import { FC } from "react";

interface MButtonProps {
  action?: () => void;
  title: string;
}

const MButton: FC<MButtonProps> = ({ action, title }) => {
  return (
    <Button
      onClick={action}
      size="small"
      sx={{ backgroundColor: "black", color: "white", p: ".5rem .75rem" }}
    >
      {title}
    </Button>
  );
};

export default MButton;
