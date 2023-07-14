const BrowserAtomation=require('../utils/browser-automation');

const browserAutomation=new BrowserAtomation();

class BrowserAutomationService{

   async launchBrowserService(){
    
    try {

          await browserAutomation.launchBrowser();
        
    } catch (error) {
        throw error;
    }
     
  }

  async visitSiteService(url){
    try {

         await browserAutomation.visitSite(url);
        
    } catch (error) {
        throw error;
    }
   
  }





  async fillFieldService(className,value){

      await browserAutomation.fillField(className,value);
        
    try {
        
    } catch (error) {
        throw error;
    }
            
  }


  
  async selectTokenService(tokenClassText,token,text){
         
    try {

        await browserAutomation.selectToken(tokenClassText,token,text);

    } catch (error) {
        throw error;
    }

  }



   async gotoRouteService(){

      try {
         
        await browserAutomation.gotoRoute();
        
      } catch (error) {
        
        throw error;
      }
   }

}

module.exports=BrowserAutomationService;