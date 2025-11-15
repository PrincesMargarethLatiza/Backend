import pool from '../config/db.js';

export const getStudents = async () =>{
    const [rows] = await pool.query("SELECT * FROM `tblstudent`");
    return rows;
}
export const insertStudents = async (name, srcode, course) => {
    const [result] = await pool.query(
        "INSERT INTO tblstudent (name, srcode, course) VALUES (?,?,?)",
        [name, srcode, course]
    );
    return result.insertId;
}

export const updateStudents = async (name, srcode, course, studentId) =>{
    const [result] = await pool.query(
        "UPDATE tblstudent SET name= ?, srcode= ?, course= ? WHERE id= ?",
        [name, srcode, course, studentId]
    );
    return result.affectedRows;
}

export const deleteStudents = async (studentId) => {
    const [result] = await pool.query(
        "DELETE FROM tblstudent WHERE id= ?",
        [studentId]
    );
    return result.affectedRows;
}