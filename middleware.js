export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();
  res.headers.append("Access-Control-Allow-Origin", "*");
  res.headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.headers.append("Access-Control-Allow-Headers", "Content-Type");
  return res;
}

export const config = { 
    matcher: ["/dashboard"],
    matcher: ["/api/:path*"],
};