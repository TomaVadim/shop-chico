"use client";

import { Pagination as MuiPagination, Stack } from "@mui/material";

interface Props {
  count: number;
  page: number;
  onChange: (value: number) => void;
}

export const Pagination = ({ count, page, onChange }: Props): JSX.Element => {
  return (
    <Stack spacing={2}>
      <MuiPagination
        className="flex justify-center"
        count={count}
        page={page}
        siblingCount={0}
        size="medium"
        color="primary"
        onChange={(event, value) => onChange(value)}
      />
    </Stack>
  );
};
