const puppeteer=require( 'puppeteer');

class BrowserAtomation{


  async launchBrowser(){
     this.browser = await puppeteer.launch({headless:false,defaultViewport:false});
     this.page = await this.browser.newPage();
     
  }

  async visitSite(url){
    await this.page.goto(url);
  }





  async fillField(className,value){
        
            const input = await this.page.$(className);
            await input.click({ clickCount: 2 })
            await input.type(value);
            }
  
  async selectToken(tokenClass,token,text){
         
           
           const input=await this.page.$(tokenClass)
           await this.page.waitForTimeout(4000)

           await input.click({ clickCount: 2 })

          await input.type(token);

        await this.page.waitForTimeout(4000)
         
       const element = await this.page.waitForSelector(`div ::-p-text(${text})`);

       console.log(element);

        await element.click();
        

       
  }


  async gotoRoute(){
    
  }
 

}

module.exports=BrowserAtomation;