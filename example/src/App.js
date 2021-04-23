import React from 'react'

import { AuthLogin } from 'reactjs-volkeno-authify'
import { AuthRegister } from 'reactjs-volkeno-authify'
import { AuthRequestResetPassword } from 'reactjs-volkeno-authify'
import { AuthResetPassword } from 'reactjs-volkeno-authify'
import 'reactjs-volkeno-authify/dist/index.css'

const onSuccessLogin = () =>{
  console.log("user connected", window.sessionStorage.getItem(`userToken`))
  debugger
  let userType = "administrateur"
  if (userType === "administrateur") {
    window.location = "/dashboard-administrateur"
  }
}
const onFailLogin = () =>{
  console.log("Login Failed")
}

const onSuccessRegister = () =>{
  console.log("Successful registration")
}
const onFailRegister = () =>{
  console.log("Failed registration")
}
const onSuccessRequestPassword = () =>{
  console.log("Successful request password")
}
const onFailRequestPassword = () =>{
  console.log("Failed request password")
}
const onSuccessResetPassword = () =>{
  console.log("Successful reset password")
}
const onFailResetPassword = () =>{
  console.log("Failed reset password")
}

const App = () => {
  return (
    
    // <div className={'container'}>
    //   <div className={'row py-5'}>
    //     <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 m-auto'>
    //       <AuthResetPassword
    //         logoFormSrc={ '' }
    //         titleTextLabel={ '' }
    //         btnPrimaryTextLabel={ '' }
    //         resetCodePlaceholder={ '' }
    //         resetCodeName={ 'reset_code' }
    //         resetCodeRequiredTextError={ '' }
    //         iconResetCodePlaceholder={ '' }
    //         passwordPlaceholder={ '' }
    //         iconPasswordPlaceholder={ '' }
    //         confirmPasswordPlaceholder={ '' }
    //         iconConfirmPasswordPlaceholder={ '' }
    //         useLogo
    //         useResetCode={false}
    //         formContainerClassName="form-container-reinit"
    //         formClassName="form-reinit"
    //         logoFormClassName="logo-formulaire-reinit"
    //         titleFormClassName="title-form-reinit"
    //         inputFormClassName="input-form-reinit"
    //         iconInputFormClassName="icon-input-form-reinit"
    //         btnPrimaryFormClassName="btn-form-reinit"
    //         toastTextClassName={ "password-reset" }
    //         setApiBase={ 'baseApi' }
    //         setEndpoint={ 'baseEndpoint' }
    //         onSuccessResetPassword={ onSuccessResetPassword }
    //         onFailResetPassword={ onFailResetPassword }
    //         toastSuccessText={ '' }
    //         toastErrorText={ '' }
    //         passwordName={ 'password' }
    //         confirmPasswordName={ 'password_confirm' }
    //         passwordRequiredTextError= { '' }
    //         confirmPasswordRequiredTextError= { '' }
    //         confirmPasswordSameTextError= { '' }
    //       />
    //     </div>
    //   </div>
    // </div>
    
    // <div className={'container'}>
    //   <div className={'row py-5'}>
    //     <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 m-auto'>
    //       <AuthRequestResetPassword
    //         logoFormSrc={ '' }
    //         titleTextLabel={ '' }
    //         btnPrimaryTextLabel={ '' }
    //         footerLinkTextLabel={ '' }
    //         footerLinkUrl={ '' }
    //         mailPlaceholder={ '' }
    //         iconMailPlaceholder={ '' }
    //         useLogo
    //         formContainerClassName="form-container-request"
    //         formClassName="form-request"
    //         logoFormClassName="logo-formulaire"
    //         titleFormClassName="title-form-request"
    //         inputFormClassName="input-form-request"
    //         iconInputFormClassName="icon-input-form-request"
    //         btnPrimaryFormClassName="btn-form-request"
    //         footerTextFormClassName="footer-text-form-request"
    //         footerLinkFormClassName="footer-link-form-request"
    //         toastTextClassName="toast-request"
    //         setApiBase={ "baseApi" }
    //         setEndpoint={ "baseEndpoint" }
    //         onSuccessRequestPassword={ onSuccessRequestPassword }
    //         onFailRequestPassword={ onFailRequestPassword }
    //         toastSuccessText={ "" }
    //         toastErrorText={ "" }
    //         emailRequiredTextError= { '' }
    //         emailValidTextError= { '' }
    //         emailName={ 'email' }

    //       />
    //     </div>
    //   </div>
    // </div>
    
    // <div className={'container'}>
    //   <div className={'row py-5'}>
    //     <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 m-auto'>
    //       <AuthRegister 
    //         logoFormSrc={ '' }
    //         titleTextLabel={ '' }
    //         btnPrimaryTextLabel={ '' }
    //         footerTextLabel={ '' }
    //         footerLinkTextLabel={ '' }
    //         footerLinkUrl={ '' }
    //         firstNamePlaceholder={ '' }
    //         iconFirstNamePlaceholder={ '' }
    //         addressPlaceholder={ '' }
    //         iconAddressPlaceholder={ '' }
    //         lastNamePlaceholder={ '' }
    //         iconLastNamePlaceholder={ '' }
    //         fullNamePlaceholder={ '' }
    //         iconfullNamePlaceholder={ '' }
    //         phonePlaceholder={ '' }
    //         iconPhonePlaceholder={ '' }
    //         mailPlaceholder={ '' }
    //         iconMailPlaceholder={ '' }
    //         passwordPlaceholder={ '' }
    //         iconPasswordPlaceholder={ '' }
    //         confirmPasswordPlaceholder={ '' }
    //         iconConfirmPasswordPlaceholder={ '' }
    //         useFullName={false}
    //         usePhone={false}
    //         useAddress
    //         useLogo
    //         firstnameName={ 'first_name' }
    //         lastnameName={ 'last_name' }
    //         fullnameName={ 'fullname' }
    //         phoneName={ 'phone' }
    //         addressName={ 'adresse' }
    //         emailName={ 'email' }
    //         passwordName={ 'password' }
    //         confirmPasswordName={ 'password_confirm' }
    //         fullnameRequiredTextError= { '' }
    //         fullnameValidTextError= { '' }
    //         firstnameRequiredTextError= { '' }
    //         firstnameValidTextError= { '' }
    //         lastnameRequiredTextError= { '' }
    //         lastnameValidTextError= { '' }
    //         phoneRequiredTextError= { '' }
    //         addressRequiredTextError= { '' }
    //         emailRequiredTextError= { '' }
    //         emailValidTextError= { '' }
    //         passwordRequiredTextError= { '' }
    //         confirmPasswordRequiredTextError= { '' }
    //         confirmPasswordSameTextError= { '' }
    //         formContainerClassName="form-container-register"
    //         formClassName="form-register"
    //         logoFormClassName="logo-formulaire-register"
    //         titleFormClassName="title-form-register"
    //         inputFormClassName="input-form-register"
    //         iconInputFormClassName="icon-input-form-register"
    //         btnPrimaryFormClassName="btn-form-register"
    //         footerTextFormClassName="footer-form-register"
    //         footerLinkFormClassName="footer-link-form-register"
    //         toastTextClassName="toast-text-props"
    //         setApiBase={'https://backend-marketplace.withvolkeno.com/api/'}
    //         setEndpoint={'auth/register/'}
    //         onSuccessRegister={ onSuccessRegister }
    //         onFailRegister={ onFailRegister }
    //         toastSuccessText={ '' }
    //         toastErrorText={ '' }
    //       />
    //     </div>
    //   </div>
    // </div>
    
  
    
    <div className={'container'}>
      <div className={'row py-5'}>
        <div className={`col-xl-5 col-lg-6 col-md-8 col-sm-10 m-auto`}>
          <AuthLogin
            logoFormSrc={ '' }
            titleTextLabel={ '' }
            resetPwdTextLabel={ '' }
            resetPwdUrl={ '/' }
            btnPrimaryTextLabel={ '' }
            btnPrimaryProgressTextLabel={ '' }
            footerTextLabel={ '' }
            footerLinkTextLabel={ '' }
            footerLinkUrl={ '' }
            mailPlaceholder={ '' }
            iconMailPlaceholder={ '' }
            passwordPlaceholder={ '' }
            iconPasswordPlaceholder={ '' }
            emailRequiredTextError= { '' }
            emailValidTextError= { '' }
            passwordRequiredTextError= { '' }
            useLogo
            emailName={ 'email' }
            passwordName={ 'password' }
            formContainerClassName="form-container-props"
            formClassName="form-props"
            logoFormClassName="logo-formulaire"
            titleFormClassName="title-form-props"
            inputFormClassName="input-form-props"
            iconInputFormClassName="icon-input-form-props"
            resetPwdLinkFormClassName="rpw-link-form-props"
            btnPrimaryFormClassName="btn-form-props"
            footerTextFormClassName="footer-form-props"
            footerLinkFormClassName="footer-link-form-props"
            toastTextClassName="toast-text-props"
            setApiBase={'http://159.89.32.58:8888/api/'}
            setEndpoint={'auth/login/'}
            keyToken={ 'userToken' }
            onSuccessLogin={ onSuccessLogin }
            onFailLogin={ onFailLogin }
            toastSuccessText={ '' }
            toastErrorText={ '' }
          />
        </div>
      </div>
    </div>
    )
}

export default App
