import db from "../config/db.config.js";

export const createsccLeader = async (data) => {
    const { exec_first_name, exec_last_name, position, phone_number, exec_image} = data; 
    const query = `
    INSERT INTO scc_execut (exec_first_name, exec_last_name, position, phone_number, exec_image)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `;

    const values = [exec_first_name, exec_last_name, position, phone_number, exec_image];
    const result = await db.query(query, values);

    return result.rows[0];
};

export const getsccLeaders = async () => {
    try {
        const query = `SELECT *  FROM scc_execut WHERE  ORDER BY exec_first_name ASC;
        `;

        const result = await db.query(query, []);
        return result.rows;
        
    } catch (error) {
        throw new Error (`Cannot fetch scc leaders`);
        console.error(`Database Error ${error.message}`);
    }
    
};

export const deletesccLeader = async (id) => {
    const query = `
    DELETE FROM scc_execut WHERE id = $1;
    `;
    const values = [id];
    await db.query(query, values);
};

