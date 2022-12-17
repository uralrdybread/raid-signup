This was my first application using both Firebase FireStore and Angular together, it's a simple raid sign up for online gaming. It allows members of a gaming group to sign up ahead of time to a dungeon so a head-count can be assessed prior to engagement.

When you first arrive you are presented with a character sign up sheet. The player will enter in his details like character name, email, particular dungeon and his equipment ranking. Pressing Sign up will post the data to the firebase database.

![signup](https://user-images.githubusercontent.com/48900828/208229086-8b2b9a8c-2003-4e35-b330-64257308bdd3.PNG)

Once the player select sign up he can see a list of other players and guild-mates signed up and their information as well. The player can, if he chooses edit his details or delete his sign up.

![roster](https://user-images.githubusercontent.com/48900828/208229209-2530a809-b12d-414a-a030-f1eae9771585.PNG)
![edit](https://user-images.githubusercontent.com/48900828/208229222-1cf694a6-321b-42b2-ae36-116667587ea2.PNG)
![delete](https://user-images.githubusercontent.com/48900828/208229230-b8e22081-9fcc-451e-a1e5-e60a3bb76cec.PNG)

The data is stored in Firebase in JSON format.

![database](https://user-images.githubusercontent.com/48900828/208229244-720332ff-8681-4262-a733-ae6b8a76915c.PNG)

# RaidCrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
