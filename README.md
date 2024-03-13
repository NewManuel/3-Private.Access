# Private Access

## Purpose

In a world where personal information is sought after every second of everyday in the year, we need to know that what is pertient to our security is handled like a classified government document. Some password that are made are quite easy to figure out due to wanting to 

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
THE user needs a new and secure password
WHEN the user clicks the button to generate a password
THEN they are presented with a series of prompts for password criteria to create the password
WHEN prompted for password criteria
THEN the user selects which criteria to include in the password with a yes or no answer
WHEN prompted for the length of the password
THEN the user chooses a length with at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN the user confirms whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN the user answers each prompt
THEN the input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is displayed in a written page
```

## Mock-Up

* This is the intended result this application is to will produce:

![This is the intended outcome.](./Assets/03-javascript-homework-demo.png)

### Wireframe



### GIF Sample-run

![A view of the index page with the password generator]()

## Extra Info: 

