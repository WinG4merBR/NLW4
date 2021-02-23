import express from 'express';

const app = express();




app.get("/", (request, response) => {
    
    return response.json({message: "hello world!"})
})

app.post("/", (request, response) => {
    return response.json({message: "data saved successfully!"}); 
})

app.listen(3333, () => console.log("Server is running!"));