
// import prisma from "../prisma"


const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addEmployee = async(req,res)=>{
    try {
        await prisma.$connect()
        const {name, age, department, salary} = req.body
        const result = await prisma.employee.create({
            data:{
                name:name,
                age:age,
                department:department,
                salary:salary
            }
        })
        return result
    } catch(err){
        console.error(err)
    }
}

const getEmployee =async(req,res)=>{
    try {
        await prisma.$connect()
        const result = await prisma.employee.findMany({ 
        select: {
            id: true,
            name: true,
            age: true,
            department: true,
            salary:true
          },
        })
        return result
    } catch(err){
        console.error(err)
    }
}


const getEmployeeById = async(req,res)=>{
    try{
        await prisma.$connect()

        const result = await prisma.employee.findUnique({
            where: {id: req.params.id},
            select: {
                id: true,
                name: true,
                age: true,
                department: true,
                salary:true
              },
        })
        return result
    } catch(err){
        console.error(err)
    }
}


const updateEmployeeDetails = async(req,res) =>{
    try {
        await prisma.$connect()

        const {name, age, department, salary} = req.body
        const resut = await prisma.employee.update({
            where: {
              id: req.params.id,
            },
            data: {
                name:name,
                age:age,
                department:department,
                salary:salary
            },
          });

          return resut
    } catch(err){
        console.log(err)
    }
} 


const deleteEmployeeDetails = async(req,res) =>{
    try {
        await prisma.$connect()

        const result = await prisma.employee.delete({
            where: {
              id: req.params.id,
            }
          });

        return result
    } catch(err){
        console.log(err)
    }
} 
export {
    addEmployee,
    getEmployee,
    getEmployeeById,
    updateEmployeeDetails,
    deleteEmployeeDetails
}