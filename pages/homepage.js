const{expect}=require('@playwright/test')

class HomePage
{
    constructor(page)
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
        await expect(this.page.locator(this.header)).toBeVisible()
    }
}

module.exports = HomePage