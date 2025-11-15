import * as StudentModel from '../models/StudentModel.js';

export const fetchStudents = async (req, res) => {
    try{
        const student = await StudentModel.getStudents();
        res.status(200).json({success: true, message: student});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
export const createStudents = async (req, res) => {
    const {name, srcode, course}= req.body
    try{
        const students = await StudentModel.insertStudents(name, srcode, course);
        res.status(200).json({success: true, message: students});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
    
}

export const editStudents = async (req, res) => {
    const {name, srcode, course}= req.body;
    const {studentId} = req.params
    try{
        const studentsId = await StudentModel.updateBook(name, srcode, course);
        res.status(200).json({success: true, message: studentsId});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
    
}
   
export const deleteStudents = async (req, res) => {
    const {studentId} = req.params
    try{
        const deleteId = await StudentModel.deleteStudents(studentId);
        res.status(200).json({success: true, message: deleteId});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
    
}
   