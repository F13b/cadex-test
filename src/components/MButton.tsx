import { Button, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC } from "react";

type MButtonProps = {
  action?: () => void;
  title: string;
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: grey[900],
  "&:hover": {
    backgroundColor: grey[800],
  },
}));

const MButton: FC<MButtonProps> = ({ action, title }) => {
  return <ColorButton onClick={action}>{title}</ColorButton>;
};

export default MButton;
