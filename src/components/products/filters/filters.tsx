"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import { SEARCH_PARAMS_GENDER } from "@/shared/enums/filter/search-params-gender.filter";
import { SEARCH_PARAMS_INSERT } from "@/shared/enums/filter/search-params-insert.filter";

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
        Фільтри:
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="gender-select-label" sx={{ color: "black" }}>
          Стать:
        </InputLabel>
        <Select
          label="Стать:"
          labelId="gender-select-label"
          defaultValue={gender}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleChangeGender}
        >
          <MenuItem value={SEARCH_PARAMS_GENDER.ALL}>
            <em>Всі чохли</em>
          </MenuItem>
          <MenuItem value={SEARCH_PARAMS_GENDER.MALE}>Для хлопчика</MenuItem>
          <MenuItem value={SEARCH_PARAMS_GENDER.FEMALE}>Для дівчинки</MenuItem>
          <MenuItem value={SEARCH_PARAMS_GENDER.UNISEX}>Унісекс</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="insert-select-label" sx={{ color: "black" }}>
          Вкладиш:
        </InputLabel>
        <Select
          labelId="insert-select-label"
          label="Вкладиш:"
          defaultValue={insert}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleChangeInsert}
        >
          <MenuItem value={SEARCH_PARAMS_INSERT.ALL}>
            <em>Всі чохли</em>
          </MenuItem>
          <MenuItem value={SEARCH_PARAMS_INSERT.WITH}>З вкладишем</MenuItem>
          <MenuItem value={SEARCH_PARAMS_INSERT.WITHOUT}>Без вкладишу</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
