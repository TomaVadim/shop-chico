"use client";
import { INSERT } from "@/shared/enums/filter/ insert.filter";
import { GENDER } from "@/shared/enums/filter/gender.filter";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Filters = (): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [insert, setInsert] = useState<string>(
    searchParams.get("insert") || ""
  );
  const [gender, setGender] = useState<string>(
    searchParams.get("gender") || ""
  );

  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(
      searchParams as unknown as URLSearchParams
    );
    params.set(key, value);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleChangeGender = (event: SelectChangeEvent) => {
    updateSearchParams("gender", event.target.value);
  };

  const handleChangeInsert = (event: SelectChangeEvent) => {
    updateSearchParams("insert", event.target.value);
  };

  return (
    <div className="flex justify-center items-center gap-5">
      <Typography variant="h2" className="hidden md:block">
        Категорії:
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          defaultValue={gender}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleChangeGender}
        >
          <MenuItem value={GENDER.ALL}>
            <em>Всі чохли</em>
          </MenuItem>
          <MenuItem value={GENDER.MALE}>Для хлопчика</MenuItem>
          <MenuItem value={GENDER.FEMALE}>Для дівчинки</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          defaultValue={insert}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleChangeInsert}
        >
          <MenuItem value={INSERT.WITHOUT}>
            <em>Без вкладиша</em>
          </MenuItem>
          <MenuItem value={INSERT.WITH}>З вкладишем</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
