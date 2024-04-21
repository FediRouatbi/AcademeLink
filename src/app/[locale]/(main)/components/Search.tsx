"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import { SearchIcon } from "@/assets/svg";

const Search = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            hideError
            className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
            placeholder="Search products..."
            type="search"
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default Search;
