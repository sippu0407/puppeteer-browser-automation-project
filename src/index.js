const express=require('express');

const {PORT}=require('./config/serverConfig');

const url="https://swap.defillama.com/?chain=ethereum&from=0x0000000000000000000000000000000000000000";

const BrowserAtomation=require('./utils/browser-automation');
const className=".chakra-input.css-lv0ed5";
const value="12";

const buttonToClick=".chakra-text.css-sys4p8";

const wbtcButtonText="ETH"
const wbtcValue="WBTC";
const wbtcText="Wrapped BTC (WBTC)";


const usdcButtonText='Select Token';
const usdcValue="USDC";
const usdcText="USD Coin (USDC)";


const swapRouteClass=".sc-55ee4011-2.fcGAPg";


const setupServer=async ()=>{

  const app=express();
   
  app.listen(PORT,async ()=>{

    console.log(`server is running at ${PORT}` );

    const browserAutomation=new BrowserAtomation();
    await browserAutomation.launchBrowser();
    await browserAutomation.visitSite(url);
    await browserAutomation.fillField(className,value);
    await browserAutomation.selectToken(wbtcButtonText,wbtcValue,wbtcText);
    await browserAutomation.selectToken(usdcButtonText,usdcValue,usdcText);
    await browserAutomation.gotoRoute(swapRouteClass);
     
  });

}

setupServer();