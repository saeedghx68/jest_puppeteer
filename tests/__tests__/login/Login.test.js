const customerCredentials = require('__fixtures__/customerCredentials')
const constance = require('__constance__')

describe('login page',  () => {
    let page
    let user = {}

    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      user.email = customerCredentials.email
      user.password = customerCredentials.password
      await page.goto('https://github.com/login')
    }, constance.timeout)

    afterAll(async () => {
      await page.close()
    })

    it('invalid login page', async () => {
      await page.waitForSelector(".auth-form-body")
      await page.type("#login_field", user.email)
      await page.type("#password", user.password)
      await page.click(".btn-primary")
      await page.waitForSelector(".flash-error")
    })

}, constance.timeout)
