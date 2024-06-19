import { Box, Container } from "@mui/material";

import { CompanyLogo } from "@/features/components/company-logo/company-logo";
import { Navigation } from "@/features/header/components/navigation/navigation";
import { HEADER_HEIGHT } from "@/constants/header-height";

export const Header = (): JSX.Element => {
  return (
    <Box
      sx={{ bgcolor: "primary.main" }}
      component="header"
      className={`w-full fixed top-0 left-0 z-10 shadow-md h-[${HEADER_HEIGHT}]`}
    >
      <Container
        maxWidth="lg"
        className="py-4 h-full flex justify-between items-center"
      >
        <CompanyLogo />

        <Navigation />
      </Container>
    </Box>
  );
};
