const express= require('express')
const bodyParser= require('body-parser')
const app = express()
const port = 4000
const pool = require('./dbConn')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/', (request,response)=>{
    response.json({info: "node js and PostgresAPI"})
})

app.get('/test', async (request,response)=>{
    let res= await pool.query('SELECT * FROM public.test')
    response.json({
        todo: res.rows
    })
   
})

app.post('/todo/create', async (request,response)=>{
    let res= await pool.query(`INSERT INTO public.test
    (id,task,done)
    VALUES($1,$2,$3)`,
    [request.body.id,request.body.task,request.body.done])
   response.json({
    "status":"task created"
   })

})

app.put('/todo/update', async (request,response)=>{
    let res= await pool.query(`UPDATE public.test
    SET task = $2, done = $3 WHERE id = $1`,
    [request.body.id,request.body.task,request.body.done])
   response.json({
    "status":"task updated"
   })

})

app.delete('/todo/delete', async (request,response)=>{
    let res = await pool.query(`DELETE From public.test Where id=$1`,
    [request.body.id])
    response.json({
        "status":"task updated"
       })
})

app.get('/testdb', async (request,response)=>{
    let res= await pool.query('SELECT * FROM public.test')
    console.log(res);
    response.json({info: 'Node.js , express and PostgresAPi'})
})

app.listen(port,()=>{
    console.log(`app is listening ${port}`);
})