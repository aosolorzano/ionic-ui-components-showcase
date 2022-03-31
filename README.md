# ionic-ui-components
This project implements some important Ionic Framework UI components using Angular.

To build and deploy the project locally:
```
ionic build
ionic serve
```

## Important commands
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
