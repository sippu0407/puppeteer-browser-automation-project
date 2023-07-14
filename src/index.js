const express=require('express');

const BrowserAutomationController=require('./controllers/browser-automation-controller');
const {PORT}=require('./config/serverConfig');


const setupServer=async ()=>{

  const app=express();
   
  app.listen(PORT,async ()=>{

    console.log(`server is running at port no: ${PORT}` );
    new BrowserAutomationController().allProjectTasks();
     
  });

}

setupServer();