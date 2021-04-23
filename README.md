# reactjs-volkeno-authify

> Volkeno authentication gives you the possibility of integrating the classic authentication system in a few clicks, while making it easier for you to adapt the forms provided, to each of your React JS projects.

[![NPM](https://img.shields.io/npm/v/reactjs-volkeno-authify.svg)](https://www.npmjs.com/package/reactjs-volkeno-authify) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactjs-volkeno-authify
```

Below you will find the documentation to handle the login form so as to modify the style, the text as well as the icon.

What should be remembered is that everything is easily customizable in this library. You will find all the necessary props to adapt this form to your design.


## Login Usage

**First step:** Import the component with css file:

```jsx
import { AuthLogin } from 'reactjs-volkeno-authify';
import 'reactjs-volkeno-authify/dist/index.css';
```

**Second step:** Use the connection component to have the login form


```jsx
const App = () => {
  return (
    <AuthLogin
      emailName={ 'email' }
      passwordName={ 'password' }
      setApiBase={'http://127.0.0.1/api/'}
      setEndpoint={'login/'}
      keyToken={ 'tokenName' }
      onSuccessLogin={ onSuccessLogin }
      onFailLogin={ onFailLogin }
    />
  )
}

export default App
```


## Registration Usage

**First step:** Import the component:

```jsx
import { AuthRegister } from 'reactjs-volkeno-authify';
```

**Second step:** Use the registration component to have the register form


```jsx
const App = () => {
  return (
    <AuthRegister 
      setApiBase={'http://127.0.0.1/api/'}
      setEndpoint={'register/'}
      onSuccessRegister={ onSuccessRegister }
      onFailRegister={ onFailRegister }
      useLogo
      usePhone
      useAddress
    />
  )
}

export default App
```


## Using password recovery

**First step:** Import the component:

```jsx
import { AuthRequestResetPassword } from 'reactjs-volkeno-authify';
```

**Second step:** Use The password recovery component to get the affected form.


```jsx
const App = () => {
  return (
    <AuthRequestResetPassword
      setApiBase={'http://127.0.0.1/api/'}
      setEndpoint={'requestResetPassword/'}
      onSuccessRequestPassword={ onSuccessRequestPassword }
      onFailRequestPassword={ onFailRequestPassword }
      emailName={ 'email' }
    />
  )
}

export default App
```



## Using Reset Password
**First step:** Import the component:

```jsx
import { AuthResetPassword } from 'reactjs-volkeno-authify'
```

**Second step:** Use The reset password component to get the affected form.


```jsx
const App = () => {
  return (
    <AuthResetPassword
      setApiBase={'http://127.0.0.1/api/'}
      setEndpoint={'changePassword/'}
      onSuccessResetPassword={ onSuccessResetPassword }
      onFailResetPassword={ onFailResetPassword }
      passwordName={ 'password' }
      confirmPasswordName={ 'password_confirm' }
    />
  )
}

export default App
```

## Configuration - Props

**Props require**

| Property                 |   Type   | Default | Description                                                                              |
| ------------------------ | :------: | :-----: | ---------------------------------------------------------------------------------------- |
| useLogo                  | boolean  |  true   | Activate the logo on the form.                                                           |
| useFullName              | boolean  |  true   | Use the fullname field instead of the first name and last name fields                    |
| usePhone                 | boolean  |  true   | Use the phone field (only in the registration form)                                      |
| useAddress               | boolean  |  true   | Use the address field (only in the registration form)                                    |
| useResetCode             | boolean  |  true   | Use a code field instead of using password validation (only in the password reset form)  |
| logoFormSrc              |  string  |    -    | Use this parameter to enter the url of the logo to display.                              |
| firstnameName            |  string  |    -    | Use this parameter to enter the name of the firstnameName input                          |
| lastnameName             |  string  |    -    | Use this parameter to enter the name of the lastnameName input                           |
| fullnameName             |  string  |    -    | Use this parameter to enter the name of the fullnameName input                           |
| phoneName                |  string  |    -    | Use this parameter to enter the name of the phoneName input                              |
| addressName              |  string  |    -    | Use this parameter to enter the name of the addressName input                            |
| emailName                |  string  |    -    | Use this parameter to enter the name of the email input.                                 |
| passwordName             |  string  |    -    | Use this parameter to enter the name of the password input.                              |
| confirmPasswordName      |  string  |    -    | Use this parameter to enter the name of the confirmPasswordName input.                   |
| resetCodeName            |  string  |    -    | Use this parameter to enter the name of the resetCodeName input.                         |
| setApiBase               |    url   |    -    | Use this parameter to enter the basic API of the application.                            |
| setEndpoint              |    url   |    -    | Use this parameter to enter the endpoint of the relevant request.                        |
| onSuccessRegister        | function |  void   | Use this method to do the actions if the register is successful.                         |
| onFailRegister           | function |  void   | Use this method to do the actions if the register failed.                                |
| onSuccessLogin           | function |  void   | Use this method to do the actions if the connection is successful.                       |
| onFailLogin              | function |  void   | Use this method to do the actions if the connection failed.                              |
| onSuccessRequestPassword | function |  void   | Use this method to do the actions if the request password is successful.                 |
| onFailRequestPassword    | function |  void   | Use this method to do the actions if the request password failed.                        |
| onSuccessResetPassword   | function |  void   | Use this method to do the actions if the reset password is successful.                   |
| onFailResetPassword      | function |  void   | Use this method to do the actions if the reset password failed.                          |
| toastSuccessText         |  string  |    -    | Enter here the message of the connection success alert.                                  |
| toastErrorText           |  string  |    -    | Enter here the message of the connection failure alert.                                  |
| keyToken                 |  string  |    -    | enter the name of the token that will be stored in the sessionStorage. the default name is (userToken).    |



**To change texts and icons**
> Find Feather Icons here https://feathericons.com/

| Property                         |   Type   | Default | Description                                                                     |
| -------------------------------- | :------: | :-----: | ------------------------------------------------------------------------------- |
| titleTextLabel                   |  string  |    -    | Change the title of the form.                                                   |
| resetPwdTextLabel                |  string  |    -    | Change the forgotten password label.                                            |
| resetPwdUrl                      |  string  |    -    | The css class of the forgotten password label.                                  |
| btnPrimaryTextLabel              |  string  |    -    | Change the text of the submit button.                                           |
| btnPrimaryProgressTextLabel      |  string  |    -    | Change the text of the submit button in progress.                               |
| footerTextLabel                  |  string  |    -    | Change the text of the footer of the form.                                      |
| footerLinkTextLabel              |  string  |    -    | Change the text of the form footer link.                                        |
| footerLinkUrl                    |    url   |    /    | To fill in the redirection url of the link at the bottom of the form.           |
| fullNamePlaceholder              |  string  |    -    | Change the text of the fullname placeholder.                                    |
| iconfullNamePlaceholder          |  string  |    -    | Change the icon of the fullname input.                                          |
| firstNamePlaceholder             |  string  |    -    | Change the text of the first name placeholder.                                  |
| iconFirstNamePlaceholder         |  string  |    -    | Change the icon of the first name input.                                        |
| lastNamePlaceholder              |  string  |    -    | Change the text of the last name placeholder.                                   |
| iconLastNamePlaceholder          |  string  |    -    | Change the icon of the last name input.                                         |
| addressPlaceholder               |  string  |    -    | Change the text of the address placeholder.                                     |
| iconAddressPlaceholder           |  string  |    -    | Change the icon of the address input.                                           |
| phonePlaceholder                 |  string  |    -    | Change the text of the phone placeholder.                                       |
| iconPhonePlaceholder             |  string  |    -    | Change the icon of the phone input.                                             |
| mailPlaceholder                  |  string  |    -    | Change the text of the email placeholder.                                       |
| iconMailPlaceholder              |  string  |    -    | Change the icon of the email input.                                             |
| passwordPlaceholder              |  string  |    -    | Change the text of the password placeholder.                                    |
| iconPasswordPlaceholder          |  string  |    -    | Change the icon of the password input.                                          |
| confirmPasswordPlaceholder       |  string  |    -    | Change the text of the confirm password placeholder.                            |
| iconConfirmPasswordPlaceholder   |  string  |    -    | Change the icon of the confirm password input.                                  |
| resetCodePlaceholder             |  string  |    -    | Change the text of the reset code placeholder.                                  |
| iconResetCodePlaceholder         |  string  |    -    | Change the icon of the reset code input.                                        |
| emailRequiredTextError           |  string  |    -    | Change the error message to the required email.                                 |
| emailValidTextError              |  string  |    -    | Change the error message to the validation email                                |
| passwordRequiredTextError        |  string  |    -    | Change the error message to the required password.                              |
| confirmPasswordRequiredTextError |  string  |    -    | Change the error message to the required confirm password                       |
| confirmPasswordSameTextError     |  string  |    -    | Change the password validation error message                                    |
| fullnameRequiredTextError        |  string  |    -    | Change the error message to the required fullname                               |
| fullnameValidTextError           |  string  |    -    | Change the error message to the validation fullname                             |
| firstnameRequiredTextError       |  string  |    -    | Change the error message to the required first name                             |
| firstnameValidTextError          |  string  |    -    | Change the error message to the validation first name                           |
| lastnameRequiredTextError        |  string  |    -    | Change the error message to the required last name                              |
| lastnameValidTextError           |  string  |    -    | Change the error message to the validation last name                            |
| phoneRequiredTextError           |  string  |    -    | Change the error message to the required phone                                  |
| addressRequiredTextError         |  string  |    -    | Change the error message to the required address                                |
| resetCodeRequiredTextError       |  string  |    -    | Change the error message to the required reset code                             |


**Customize the style of the form and its components**

| Property                  |   Type   | Default | Description                                                                     |
| ------------------------- | :------: | :-----: | ------------------------------------------------------------------------------- |
| formContainerClassName    |  string  |    -    | Customize the form container.                                                   |
| formClassName             |  string  |    -    | Customize the form.                                                             |
| logoFormClassName         |  string  |    -    | Change logo properties.                                                         |
| titleFormClassName        |  string  |    -    | Change title properties.                                                        |
| inputFormClassName        |  string  |    -    | Customize email and password inputs.                                            |
| iconInputFormClassName    |  string  |    -    | Customize email and password icons.                                             |
| btnPrimaryFormClassName   |  string  |    -    | Change login button properties.                                                 |
| footerTextFormClassName   |  string  |    -    | Change the properties of the text at the bottom of the form.                    |
| footerLinkFormClassName   |  string  |    -    | Change the properties of the link at the bottom of the form.                    |
| toastTextClassName        |  string  |    -    | Stylize the text of the toast.                                                  |


## License

MIT © [volkeno-dev](https://github.com/volkeno-dev)
