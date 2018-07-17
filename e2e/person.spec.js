describe('People App Edit', () => {
    beforeEach(() => {
        browser.get('http://localhost:3000/#!/people/130')
    })

    afterEach(() => {
        // restore updated fields
        element(by.model('$ctrl.person.FirstName')).clear().sendKeys('test')
        element(by.css('[ng-click="$ctrl.save()"]')).click()
        browser.waitForAngular()
    })

    it('should have the fields filled correctly', () => {
        expect(element(by.model('$ctrl.person.FirstName')).getAttribute('value')).toEqual('test')
        expect(element(by.model('$ctrl.person.LastName')).getAttribute('value')).toEqual('test')
        expect(element(by.model('$ctrl.person.Age')).getAttribute('value')).toEqual('111')
    })

    it('should update person.FirstName', () => {
        element(by.model('$ctrl.person.FirstName')).sendKeys('_updated')
        element(by.css('[ng-click="$ctrl.save()"]')).click()
        browser.waitForAngular()
        browser.get('http://localhost:3000/#!/people/130')
        expect(element(by.model('$ctrl.person.FirstName')).getAttribute('value')).toEqual('test_updated')
    })
})

describe('People App Create', () => {
    beforeEach(() => {
        browser.get('http://localhost:3000/#!/people/new')
    })

    it('should have the fields empty', () => {
        expect(element(by.model('$ctrl.person.FirstName')).getAttribute('value')).toEqual('')
        expect(element(by.model('$ctrl.person.LastName')).getAttribute('value')).toEqual('')
        expect(element(by.model('$ctrl.person.Age')).getAttribute('value')).toEqual('0')
    })

    it('should create a new person', () => {
        element(by.model('$ctrl.person.FirstName')).sendKeys('new')
        element(by.model('$ctrl.person.LastName')).sendKeys('new')
        element(by.model('$ctrl.person.Age')).clear().sendKeys('10')
        element(by.css('[ng-click="$ctrl.save()"]')).click()
        browser.waitForAngular()

        var e = element.all(by.repeater('x in $ctrl.people')).last()
        e.all(by.css('#edit')).get(0).click()
        browser.waitForAngular()

        expect(element(by.model('$ctrl.person.FirstName')).getAttribute('value')).toEqual('new')
        expect(element(by.model('$ctrl.person.LastName')).getAttribute('value')).toEqual('new')
        expect(element(by.model('$ctrl.person.Age')).getAttribute('value')).toEqual('10')
    })
})