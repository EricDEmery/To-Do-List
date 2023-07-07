# MoSCow

## Must Have

    -dynamic display of list items
    -input box
    -state of tasks (active, inactive, and completed)
    -ability to clear tasks (soft or hard delete)

## Should Have

    -local storage

## Could Have

    -task priority
    -task organization system??

## Wont Have

    -login feature

# Procedural

## Begin

    -page renders dynamically
    -input box allows user to input items

## Init

    -user is able to add items to list
    -page updates automatically with user input
    -list items will show until cleared by user
    -removal buttons render when tasks are added to list
    -(POSSIBLE) buttons will show up to navigate between task organization pages

## END

# Functional

handleInput()
-funtion to render users input
-adds user input to list

storeData()
-function to hold data in local storage

useState()
-function that changes page state based on the user input

hardReset()
-function will reset task list completely onClick

softReset()
-function will only delete certain items from task list onClick

navigate()
-function to change page state between active, inactive, and completed tasks
-(Maybe a NAV BAR???)
