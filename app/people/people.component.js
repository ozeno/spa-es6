import view from './people.template.html'

class peopleCtrl {
    constructor(PeopleService)
    {
        this.service = PeopleService
        this.getAll()
    }

    getAll() {
        this.service.getAll().then((res) => {
            this.people = res
        });
    }

    delete(x, i) {
        this.service.delete(x.Id)
        this.people.splice(i, 1)
    }
}

module.exports = {
    template: view,
    controller: peopleCtrl
}