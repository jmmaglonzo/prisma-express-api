import dotenv from "dotenv";
dotenv.config();

const env_config = {
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};

export default env_config;
