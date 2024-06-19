import { Box, BoxProps, Container } from "@mui/material";

interface Props extends BoxProps {}

export const SectionWrapper = ({ children, ...props }: Props): JSX.Element => {
  return (
    <Box
      component="section"
      {...props}
      className={`py-10 pd:my-20 ${props.className}`}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};
