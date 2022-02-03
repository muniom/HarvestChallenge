// npm run test -- -test="../src/app/auth/login" -debug
import { Test } from '../../../e2e/models/test.model';

export default new Test({
    name: 'Login',
    url: '/',
    steps: [
        new Test({
            name: 'Register',
            steps: [
                async (page, settings, log) => {
                    await page.waitForSelector('.welcome');
                    await page.click('.sign-up');
                    await page.waitFor(1000);
                    await page.type('#signUpForm ion-input[name="firstName"] input', 'autoUser');
                    await page.type('#signUpForm ion-input[name="email"] input', 'auto@user');
                    await page.type('#signUpForm ion-input[name="pass"] input', 'autoUser');
                    await page.click('ion-fab-button#sign-up');
                    // await page.waitForResponse();
                    // await page.waitFor(1000);
                    // await page.$eval('body', el => { debugger; });
                }
            ]
        })
    ],
  /* assertion: {
        selector: 'app-home'
    } */
});
