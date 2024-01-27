import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export  const  {auth, handlers:{GET, POST}} = NextAuth({
    providers: [

        CredentialsProvider({
            name: "Credentials",

            credentials: {
                username: { label: "Username", type: "text", placeholder: "User Name" },
                password: { label: "Password", type: "password", placeholder: "Password" }
              },

              authorize: async(credentials)=> {

                const user = { id: "1", name: "J Smith", email: "jsmith@example.com", username: 'akd', password:'admin' }

                if (credentials.username === user.username && credentials.password === user.password ) {
                    return user
                }else{
                    return null
                }

              }
        }),

        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          }),

          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),

          
       
    ],
   


 

    secret: process.env.AUTH_SECRET
})