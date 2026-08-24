const{expect}=require('@playwright/test')
class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.username="#email1"
        this.password="#password1"
        this.submit="//*[@class='submit-btn']"
    }
    async loginToApplication()
    {        
        await this.page.fill(this.username, "admin@email.com")
        await this.page.type(this.password, "admin@123")
        await this.page.click(this.submit)      
    }
    async verifySignIn()
    {
        await expect(this.page.locator(this.submit)).toBeVisible()
    }

}
module.exports=LoginPage