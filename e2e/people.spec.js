describe('People App List', () => {
    beforeEach(() => {
        browser.get('http://localhost:3000')
    })

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual('People')
    })

    it('should redirect to people', () => {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#!/people')
    })

    it('should list people', () => {
        expect(element.all(by.repeater('x in $ctrl.people')).count()).toBeGreaterThan(6)
    })
})

describe('People App Delete', () => {
    beforeEach(() => {
        browser.get('http://localhost:3000')
    })

    it('should delete last added person', () => {
        let e, count_old

        e = element.all(by.repeater('x in $ctrl.people'))
        count_old = e.count()

        e.last().all(by.css('#delete')).get(0).click()
        browser.waitForAngular()
        count_new = e.count()
        e.count().then((count) => { expect(count_old).toEqual(count + 1) })
    })
})