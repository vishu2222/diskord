import querystring from "querystring"
import config from "../../config.js"
import fetch from "node-fetch"
import { v4 as uuid } from "uuid"
import { createSession } from "../../models/sessions.js"

export async function authorizeMe(req, res) {
  //   const queryParams = querystring.stringify({
  //     response_type: "code",
  //     client_id: config.CLIENT_ID,
  //     redirect_uri: config.REDIRECT_URI,
  //     scope: "openid profile email"
  //   })
  //   return res.json({ url: `${config.AUTH_ENDPOINT}?${queryParams}` })
}

export async function authServerCallBack(req, res) {
  //   const { code } = req.query
  //   const tokenParams = querystring.stringify({
  //     code,
  //     client_id: config.CLIENT_ID,
  //     client_secret: config.CLIENT_SECRET,
  //     redirect_uri: config.REDIRECT_URI,
  //     grant_type: "authorization_code"
  //   })
  //   const tokenRes = await fetch(config.TOKEN_ENDPOINT, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     },
  //     body: tokenParams
  //   })
  //   const { access_token } = await tokenRes.json()
  //   const userinfoRes = await fetch(config.USERINFO_ENDPOINT, {
  //     headers: {
  //       Authorization: `Bearer ${access_token}`
  //     }
  //   })
  //   const { sub, name, email } = await userinfoRes.json()
  //   const sessionId = uuid()
  //   //   await createSession(sessionId, email)
  //   res
  //     .cookie("sessionId", sessionId, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true })
  //     .status(201)
  //     .redirect("http://localhost:3001")
}
