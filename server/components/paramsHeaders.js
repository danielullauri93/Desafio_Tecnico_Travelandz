import dotenv from "dotenv";

dotenv.config();

export const params = {
  fields: "ALL",
  language: "es",
  offset: 1,
  limit: 1000,
};

export const headers = {
  accept: "application/json",
  ["api-key"]: process.env.API_KEY,
  ["Account-name"]: process.env.ACCOUNT_NAME,
  ["Account-configuration"]: process.env.ACCOUNT_CONFIGURATION,
};
