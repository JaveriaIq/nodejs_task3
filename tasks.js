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
// app.get('/', (request,response)=>{
//     response.json({info: "node js and PostgresAPI"})
// })

// app.get('/test', async (request,response)=>{
//     let res= await pool.query('SELECT * FROM public.test2')
//     response.json({
//         todo: res.rows
//     })
   
// })

app.post('/todo/task1', async (request,response)=>{
    let res= await pool.query(`INSERT INTO public.test2
    (task,done)
    VALUES($1,$2)`,
    [request.body.task,request.body.done])
   response.json({
    "status":"task created"
   })

})

app.get('/todo/task2', async (request,response)=>{
    let res= await pool.query(`SELECT COUNT(done) FROM public.test2 WHERE done=false`)

    response.json({
        "todo": res
    })
   
})

app.get('/todo/task4', async (request,response)=>{
    let res= await pool.query(`SELECT * FROM public.test2 WHERE id=4`)
    console.log(res);

    response.json({
        "todo": res
    })
   
})

app.get('/todo/task3', async (request,response)=>{
    let res= await pool.query(`SELECT COUNT(id) FROM public.test2
    `)
   
    console.log(res);

    response.json({
        "todo": res
    })
   
})







// app.delete('/todo/delete', async (request,response)=>{
//     let res = await pool.query(`DELETE From public.test Where id=$1`,
//     [request.body.id])
//     response.json({
//         "status":"task updated"
//        })
// })

// app.get('/testdb', async (request,response)=>{
//     let res= await pool.query('SELECT * FROM public.test')
//     console.log(res);
//     response.json({info: 'Node.js , express and PostgresAPi'})
// })

app.listen(port,()=>{
    console.log(`app is listening ${port}`);
})