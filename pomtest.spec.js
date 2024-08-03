import{test , expect} from '@playwright/test'
import { LoginPAge } from './POM/loginpage'
import { HomePage } from './POM/homepage';
 

test('POM', async({page})=>{
    const pom = new LoginPAge(page);
    await pom.gotoLoginPAge();
    await pom.login('osa.ma','osamasaeed');



  const homy = new HomePage (page);
  await homy.addProducttoCart('Nokia lumia 1520');
  

  await homy.gotoCart();
  await page .waitForTimeout(5000);
})