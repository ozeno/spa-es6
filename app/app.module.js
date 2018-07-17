import angular from 'angular';
import ngRoute from 'angular-route';
import routes from './app.routes';
import PeopleService from './app.service'
import people from './people/people.component';
import person from './person/person.component';

angular.module('app', [ngRoute])
    .config(routes)
    .service('PeopleService', PeopleService)
    .component('people', people)
    .component('person', person)
