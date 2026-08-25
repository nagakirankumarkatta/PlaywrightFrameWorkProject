import{expect} from '@playwright/test'
class HomePage
{
    constructor()
    {
        this.page=page
        this.header="//h1"
        this.menu="//*[@alt='menu']"
        this.logout="//*[text()='Sign out']"
    }

    async logoutFromApp()
    {
        await this.page.click(this.menu)
        await this.page.click(this.logout)
    }

    async verifyHeader()
    {
        await expect(this.menu).toBeVisible()
    }
}
module.exports=HomePage