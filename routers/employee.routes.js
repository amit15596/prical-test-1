/**
 * Import exteral  
 */
 import express from "express";
 import { statusCode } from "../helpers";
 import { employee } from "../handlers"; 

 const employeeRouter = express();

 /**
  * insert empployee data 
  */
employeeRouter.post('/employee', async(req,res)=>{
    try {
        const result = await employee.addEmployee(req,res)
        res.status(statusCode.Created).json(result)        
    } catch(err){
        console.error(err)
    }
})


employeeRouter.get('/employee', async(req,res)=>{
    try {
        const result = await employee.getEmployee()
        res.status(statusCode.OK).json(result)        
        
    } catch(err){
        console.error(err)
    }
})

employeeRouter.get('/employee/:id', async(req,res)=>{
    try {
        const result = await employee.getEmployeeById(req)
        res.status(statusCode.OK).json(result)        
        
    } catch(err){
        console.error(err)
    }
})

employeeRouter.update('/employee/:id', async(req,res)=>{
    try {
        const result = await employee.updateEmployeeDetails(req)
        res.status(statusCode.OK).json(result) 

    } catch(err){
        console.error(err)
    }
})

employeeRouter.delete('/employee/:id', async(req,res)=>{
    try {
        const result = await employee.deleteEmployeeDetails(req)
        res.status(statusCode.OK).json(result) 
    } catch(err){
        console.error(err)
    }
})



export {employeeRouter}