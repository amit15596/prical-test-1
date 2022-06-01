/**
 *  import external module
 */
import express from "express";
import jwt from "jsonwebtoken";
/**
 * Import Internal module
 */
import { Admin, employee } from "../config/admin";
import { statusCode } from "../helpers";

const loginRouter = express();

/**
 * Admin Login
 */
loginRouter.post("/admin-login", async (req, res) => {
    try {
        let { email, password, roleId } = req.body;
        let token;
        if ( Admin.email == email &&  Admin.password == password && Admin.roleId == parseInt(roleId) ) {
            token = jwt.sign(
                { userId: Admin.id, email: Admin.email },
                "XL1234",
                { expiresIn: "1h" }
            );
            res.status(statusCode.OK).json({
                success: true, userId: Admin.id,
                email: Admin.email,
                token: token,
            })
        } else {
            res.status(statusCode.NotFound).json({success:false, message:"Invalide Email or Password"})
            console.log("Email & Password is Invalid....")
        }
    } catch (err) {
        console.log(err)
    }
})

/**
 * Login Employee
 */
loginRouter.post("/employee-login", async (req, res) => {
    try {
        let { email, password,roleId } = req.body;
        let token;
        if ( employee.email == email && employee.password  == password && employee.roleId == parseInt(roleId)) {
            token = jwt.sign(
                { userId: employee.id, email: employee.email },
                "XL1234",
                { expiresIn: "1h" }
            );
            res.status(statusCode.OK).json({
                success: true, userId: employee.id,
                email: employee.email,
                token: token,
            })
        } else {
            res.status(statusCode.NotFound).json({success:false, message:"Invalide Email or Password"})
            console.log("Email & Password is Invalid....")
        }
    } catch (err) {
        console.log(err)
    }
})


export { loginRouter }
