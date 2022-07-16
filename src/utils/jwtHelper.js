import jwt from 'jsonwebtoken';
import {
    config
} from 'dotenv'

config();

export const generateToken = async (payload) => {
    return await jwt.sign(payload, process.env.JWTSECRET, {
        expiresIn: process.env.TOKENEXPIRATIONTIME,
    });
};

export const jwtValidator = async (payload) => {
    try {
        const decodedToken = jwt.verify(payload, process.env.JWTSECRET);
        console.log("the decoded token is :", decodedToken)
        return decodedToken
    } catch (error) {
        console.log(error)
        return false
    }
}