import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import kakaoLogin from "../../../util/config";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Github에서 발급받은ID",
      clientSecret: "Github에서 발급받은Secret",
    }),
    KakaoProvider({
      clientId: kakaoLogin.kakaoClientId,
      clientSecret: kakaoLogin.kakaoClientSecret,
    }),
  ],
  secret: "qwer1234",
};
export default NextAuth(authOptions);
