import "dotenv";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
//import KakaoProvider from "next-auth/providers/kakao";
//import kakaoLogin from "../../../util/config";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GIT_CLIENT_ID,
      clientSecret: process.env.GIT_CLIENT_SECRET,
    }),
    
  ],
  secret: process.env.JWT_SECRET,
};
export default NextAuth(authOptions);
