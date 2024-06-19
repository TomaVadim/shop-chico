import { Box } from "@mui/material";

import { Benefit } from "@/shared/enums/routes/interfaces/benefit";
import { BenefitCard } from "@/features/home/components/benefit-card/benefit-card";

interface Props {
  list: Benefit[];
}

export const Benefits = ({ list }: Props): JSX.Element => {
  return (
    <Box className="flex flex-col gap-5 md:grid md:grid-cols-2">
      {list.map(({ id, title, description }) => (
        <BenefitCard key={id} title={title} description={description} />
      ))}
    </Box>
  );
};
