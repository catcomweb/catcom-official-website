import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

// Neon connection
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  statement_timeout: 0,
  idle_in_transaction_session_timeout: 600000,
  ssl: process.env.DATABASE_URL.includes("sslmode=require") 
       ? { rejectUnauthorized: false } 
       : false, // only use SSL if the URL specifies it
});

db.on("connect", () => console.log("✅ Connected to the database"));
db.on("error", (err) => console.error("❌ Unexpected error on idle client", err));

export default db;
