import db from "../config/db.config.js";
import bcrypt from "bcryptjs";

export const register = async (data) => {
    const { full_name, email, password, role } = data; 
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
    INSERT INTO users (full_name, email, password, role)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;

    const values = [full_name, email, hashedPassword, role];
    const result = await db.query(query, values);

    return result.rows[0];
};


