
// import prisma from "../prisma"


const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addEmployee = async(req,res)=>{
    try {
        await prisma.$connect()
        // const {name, age, department, salary} = req.body
        // console.log(name, age,department,salary, "console")
        await prisma.user.create({
            data:{
                name:req.body.name,
                age:req.body.age,
                department:req.body.department,
                salary:req.body.salary
            },
        })
        let result = await prisma.user.findMany()

        return result
    } catch(err){
        console.error(err)
    } finally {
        await prisma.$disconnect()
    }
}

const getEmployee =async(req,res)=>{
    try {
        await prisma.$connect()
        const result = await prisma.user.findMany({ 
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
    } finally {
        await prisma.$disconnect()
    }
}


const getEmployeeById = async(req,res)=>{
    try{
        await prisma.$connect()

        const result = await prisma.user.findUnique({
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
    } finally {
        await prisma.$disconnect()
    }
}


const updateEmployeeDetails = async(req,res) =>{
    try {
        await prisma.$connect()

        const {name, age, department, salary} = req.body
        const resut = await prisma.user.update({
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
    } finally {
        await prisma.$disconnect()
    }
} 


const deleteEmployeeDetails = async(req,res) =>{
    try {
        await prisma.$connect()

        const result = await prisma.user.delete({
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