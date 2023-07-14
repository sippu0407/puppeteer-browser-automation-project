const express=require('express');

const {PORT}=require('./config/serverConfig');

const url="https://swap.defillama.com/?chain=ethereum&from=0x0000000000000000000000000000000000000000";

const BrowserAtomation=require('./utils/browser-automation');
const className=".chakra-input.css-lv0ed5";
const value="12";

const wbtcClassName=".chakra-text.css-sys4p8";
const wbtcvalue="WBTC";
const wbtcText="Wrapped BTC (WBTC)"

const setupServer=async ()=>{

  const app=express();
   
  app.listen(PORT,async ()=>{

    console.log(`server is running at ${PORT}` );

    const browserAutomation=new BrowserAtomation();
    await browserAutomation.launchBrowser();
    await browserAutomation.visitSite(url);
    await browserAutomation.fillField(className,value);
    await browserAutomation.selectToken(wbtcClassName,wbtcvalue,wbtcText);
     
  });

}

setupServer();