import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

const {auth, handlers:{GET, POST}} = NextAuth({
    providers: [

        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          })

       
    ]
})