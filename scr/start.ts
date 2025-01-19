import { api } from "encore.dev/api";

export const start = api(
  {
    method: "GET",
    path: "/",
  },
  async (): Promise<{ message: string }> => {
    return {
      message: "OK",
    };
  },
);
