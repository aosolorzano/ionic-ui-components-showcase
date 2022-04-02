# ionic-ui-components
This project implements some important UI components from the Ionic Framework, and it is constructed using Angular.

This project is based on the module 5 of the course "[ionic 6+: Crear aplicaciones IOS, Android y PWAs con Angular](https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/)" from Fernando Herrera on Udemy.

## Build and deploy the project locally
You must execute the following commands:
```
ionic build
ionic serve
```

## Other important commands
To create a new ionic project using a blank template;
```
ionic start <project-name> blank --type=angular
```
To create a new angular module;
```
ionic g module components
```
To create a new component (not include a module and routing file), that will be shared with others:
```
ionic g component components/header --spec=false
```
To create a new page component without the spec file:
```
ionic g page pages/<page-name> --spec=false
```
If you want to visualize first the files that will be created, add the dry-run directive at the end:
```
ionic g page pages/<page-name> --spec=false --dry-run
```

## Ionic DateTime
For this component, we must install the "date-fns" dependency for datetime validation and manipulation:
```
npm install date-fns --save
```

## Animate CSS
[Animate.css](https://animate.style/) is a library of ready-to-use, cross-browser animations for use in your web projects.
```
npm install animate.css --save
```
