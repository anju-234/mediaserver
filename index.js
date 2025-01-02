const JSONServer=require('json-server')// Importing json-server
const MPServer=JSONServer.create()// Creating the server instance
const router=JSONServer.router('db.json')// Defining the router, which uses 'db.json' as the database
const middleware=JSONServer.defaults()// Applying default middlewares
const PORT=3000 || process.env.PORT
MPServer.use(middleware)
MPServer.use(router)
MPServer.listen(PORT,()=>{
    console.log((`MediaPlayer Server Running at PORT:${PORT} & waiting for client requests...`));
})