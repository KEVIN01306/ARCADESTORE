import { createSecretKey } from 'crypto'
import { SignJWT, jwtVerify } from 'jose'
import dotenv from 'dotenv'

dotenv.config()

const alg = 'HS256'
const jwtIIS = process.env.JWT_ISS;
const jwtAUD = process.env.JWT_AUD;
const jwtAccessTTL = process.env.JWT_ACCESS_TTL;
const jwtSecret = process.env.JWT_SECRET

const secretKey = createSecretKey(Buffer.from(jwtSecret, 'utf8'))

export const issueAccessToken = async({ sub, role, extra = {}}) => {
    return await new SignJWT({role, ...extra})
        .setProtectedHeader({ alg })
        .setIssuer(jwtIIS)
        .setAudience(jwtAUD)
        .setSubject(String(sub))
        .setIssuedAt()
        .setExpirationTime(jwtAccessTTL)
        .sign(secretKey)
}

export const verifyAccessToken = async ( token ) => {
    const { payload } = await jwtVerify(token, secretKey,{
        issuer: jwtIIS,
        audience: jwtAUD,
        clockTolerance: 5
    }) 

    return payload;
}