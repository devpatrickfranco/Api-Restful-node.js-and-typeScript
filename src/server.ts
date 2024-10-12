import { app } from '../src/app'
import { env } from './env'

app.listen({
    port: env.data.PORT
}).then(()=>{
    console.log("Server Running in port 3333")
})

