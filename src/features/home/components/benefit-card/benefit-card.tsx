import { Box, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

interface Props {
  title: string;
  description: string;
}

export const BenefitCard = ({ title, description }: Props): JSX.Element => {
  return (
    <Box
      component="article"
      className="flex flex-col gap-1 rounded-md shadow-md p-4"
    >
      <Box className="flex items-center gap-3">
        <TaskAltIcon sx={{ color: "success.light" }} className="text-5xl" />
        <Typography variant="h2" component="h3" className="font-semibold">
          {title}
        </Typography>
      </Box>
      <Typography>{description}</Typography>
    </Box>
  );
};
