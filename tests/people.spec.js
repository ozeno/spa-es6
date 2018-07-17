// describe('People Component', () => {
//     let $compile, $httpBackend, scope, element

//     beforeEach(() => {
//         angular.mock.module('app')
//     })

//     beforeEach(inject(($rootScope, _$compile_, _$httpBackend_) => {
//         scope = $rootScope.$new()
//         $compile = _$compile_
//         $httpBackend = _$httpBackend_

//         $httpBackend.when('GET', 'http://localhost:63394/api/People/')
//             .respond([{"Id":2,"FirstName":"Ömer","LastName":"Özen","Age":22}])

//         element = angular.element(`<people></people>`)
//         element = $compile(element)(scope)
//     }))

//     it('should have the entity with expected values', () => {
//         $httpBackend.flush()
//         expect(element.html()).toContain('Ömer')
//         expect(element.html()).toContain('22')
//     })

//     it('should have Edit and Delete options', () => {
//         $httpBackend.flush()
//         expect(element.html()).toContain('Edit')
//         expect(element.html()).toContain('Delete')
//     })

// })

describe('People Component', () => {
    let $compile, scope, element, service, $q

    beforeEach(() => {
        angular.mock.module('app')
    })

    beforeEach(inject(($rootScope, _$compile_, _PeopleService_, _$q_) => {
        scope = $rootScope.$new()
        $compile = _$compile_
        service = _PeopleService_
        $q = _$q_
    }))

    beforeEach((done) => {
        const res = [{ "Id": 2, "FirstName": "Ömer", "LastName": "Özen", "Age": 22 }]
        spyOn(service, 'getAll').and.callFake(() => $q.when().then(() => res)
            .finally(() => {
                done()
            }))
        element = angular.element(`<people></people>`)
        element = $compile(element)(scope)
        scope.$digest()
    })


    it('should have the entity with expected values', () => {
        expect(element.html()).toContain('Ömer')
        expect(element.html()).toContain('22')
    })

    it('should have Edit and Delete options', () => {
        expect(element.html()).toContain('Edit')
        expect(element.html()).toContain('Delete')
    })

})