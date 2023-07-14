const BrowserAutomationService=require('../services/browser-automation-service');
const {WEBSITE_URL,
    INPUT_TAG_CLASS_NAME,INPUT_TAG_VALUE,
    WBTC_BUTTON_TEXT , WBTC_DIV_TAG_VALUE , WBTC_INPUT_TAG_VALUE,
    USDC_BUTTON_TEXT,USDC_DIV_TAG_VALUE,USDC_INPUT_TAG_VALUE}=require('../config/serverConfig');

const browserAutomation=new BrowserAutomationService();

class BrowserAutomationController{

   async allProjectTasks(req,res){
    
    try {

          await browserAutomation.launchBrowserService();
          await browserAutomation.visitSiteService(WEBSITE_URL);
          await browserAutomation.fillFieldService(INPUT_TAG_CLASS_NAME,INPUT_TAG_VALUE);
          await browserAutomation.selectTokenService(WBTC_BUTTON_TEXT,WBTC_INPUT_TAG_VALUE,WBTC_DIV_TAG_VALUE);
          await browserAutomation.selectTokenService(USDC_BUTTON_TEXT,USDC_INPUT_TAG_VALUE,USDC_DIV_TAG_VALUE);
          await browserAutomation.gotoRouteService();
        
    } catch (error) {
          console.log(error);
        }
    }
     
  }


module.exports=BrowserAutomationController;