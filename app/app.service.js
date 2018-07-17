const baseURL = 'http://localhost:63394/api/People/'

export default class PeopleService {
    constructor($http) {
        this.http = $http;
    }
    getAll() {
        return this.http.get(baseURL).then((res) => res.data)
    }
    
    get(id) {
        return this.http.get(baseURL + id).then((res) => res.data)
    }
    
    create(p) {
        return this.http.post(baseURL, p)
    }
    
    update(id, p) {
        return this.http.put(baseURL + id, p)
    }

    delete(id) {
        return this.http.delete(baseURL + id)
    }
}
