// describe('Person Component', () => {
//     let $compile, $httpBackend, scope, $routeParams, element

//     beforeEach(() => {
//         angular.mock.module('app')
//     })

//     beforeEach(inject(($rootScope, _$compile_, _$httpBackend_, _$routeParams_) => {
//         scope = $rootScope.$new()
//         $compile = _$compile_
//         $httpBackend = _$httpBackend_
//         $routeParams = _$routeParams_

//         $httpBackend.when('GET', 'http://localhost:63394/api/People/2')
//             .respond({"Id":2,"FirstName":"Ömer","LastName":"Özen","Age":22})
        
//     }))

//     it('should have the person with expected values', () => {
//         $routeParams.id = 2
//         let element = angular.element(`<person></person>`)
//         element = $compile(element)(scope)
//         $httpBackend.flush()
//         expect(element.isolateScope().$ctrl.person.FirstName).toBe('Ömer')
//         expect(element.isolateScope().$ctrl.person.Age).toBe(22)
//     })

//     it('should have the person with empty values', () => {
//         $routeParams.id = 'new'
//         element = angular.element(`<person></person>`)
//         element = $compile(element)(scope)

//         expect(element.isolateScope().$ctrl.person.FirstName).toBe('')
//         expect(element.isolateScope().$ctrl.person.Age).toBe(0)
//     })

//     it('should have 4 inputs', () => {
//         let element = angular.element(`<person></person>`)
//         element = $compile(element)(scope)
//         expect(element.find('input').length).toBe(4)
//     })
// })

describe('Person Component', () => {
    let $compile, scope, $routeParams, element, service, $q

    beforeEach(() => {
        angular.mock.module('app')
    })

    beforeEach(inject(($rootScope, _$compile_, _$routeParams_, _PeopleService_, _$q_) => {
        scope = $rootScope.$new()
        $compile = _$compile_
        $routeParams = _$routeParams_
        service = _PeopleService_
        $q = _$q_
    }))

    beforeEach((done) => {
        const res = { "Id": 2, "FirstName": "Ömer", "LastName": "Özen", "Age": 22 }
        spyOn(service, 'get').and.callFake(() => $q.when().then(() => res)
            .finally(() => {
                done()
            }))
        element = angular.element(`<person></person>`)
        element = $compile(element)(scope)
        scope.$digest()
    })

    it('should have the person with expected values', () => {
        expect(element.isolateScope().$ctrl.person.FirstName).toBe('Ömer')
        expect(element.isolateScope().$ctrl.person.Age).toBe(22)
    })

    it('should have the person with empty values', () => {
        $routeParams.id = 'new'

        let element = angular.element(`<person></person>`)
        element = $compile(element)(scope)

        expect(element.isolateScope().$ctrl.person.FirstName).toBe('')
        expect(element.isolateScope().$ctrl.person.Age).toBe(0)
    })

    it('should have 4 inputs', () => {
        expect(element.find('input').length).toBe(4)
    })
})