import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    "pizza/fetchPizzasStatus",
    async (params) => {
      const { sortBy, order, category, search, currentPage } = params;
      const { data } = await axios.get<Pizza[]>(
        `https://628e0106368687f3e70e79e3.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      return data;
    }
  );