import view from './person.template.html'

class personCtrl {
    constructor($routeParams, $window, PeopleService) {
        this.window = $window
        this.id = $routeParams.id
        this.service = PeopleService

        this.getP()
    }

    get() {
        this.service.get(this.id).then((res) => this.person = res)
    }

    create() {
        this.isLoading = true
        this.service.create(this.person).then(() => {this.window.location.href='#!/people'; this.isLoading = false})
    }

    update() {
        this.isLoading = true
        this.service.update(this.id, this.person).then(() => {this.window.location.href='#!/people'; this.isLoading = false})
    }

    save() {
        this.id === 'new' ? this.create() : this.update()
    }

    getP() {
        if (this.id === 'new') {
            this.person = {
                FirstName: "",
                LastName: "",
                Age: 0
            }
        } else {
            this.get()
        }
    }
}

module.exports = {
    template: view,
    controller: personCtrl
}