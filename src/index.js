import React from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import RequestResetPassword from './components/RequestResetPassword/RequestResetPassword'
import ResetPassword from './components/ResetPassword/ResetPassword'

export const AuthLogin = (props) => {
  
  return (
    <Login 
      logoFormSrc={ props.logoFormSrc }
      titleTextLabel={ props.titleTextLabel }
      mailPlaceholder={ props.mailPlaceholder }
      iconMailPlaceholder={ props.iconMailPlaceholder }
      passwordPlaceholder={ props.passwordPlaceholder }
      iconPasswordPlaceholder={ props.iconPasswordPlaceholder }
      resetPwdTextLabel={ props.resetPwdTextLabel }
      resetPwdUrlFormClassName={ props.resetPwdUrlFormClassName }
      btnPrimaryTextLabel={ props.btnPrimaryTextLabel }
      footerTextLabel={ props.footerTextLabel }
      footerLinkTextLabel={ props.footerLinkTextLabel }
      footerLinkUrl={ props.footerLinkUrl }
      formContainerClassName={ props.formContainerClassName }
      formClassName={ props.formClassName }
      useLogo={props.useLogo}
      logoFormClassName={ props.logoFormClassName }
      titleFormClassName={ props.titleFormClassName }
      inputFormClassName={ props.inputFormClassName }
      iconInputFormClassName={ props.iconInputFormClassName }
      resetPwdLinkFormClassName={ props.resetPwdLinkFormClassName }
      btnPrimaryFormClassName={ props.btnPrimaryFormClassName }
      footerTextFormClassName={ props.footerTextFormClassName }
      footerLinkFormClassName={ props.footerLinkFormClassName }
    />
  )
}

export const AuthRegister = (props) => {
  return (
    <Register 
      logoFormSrc={ props.logoFormSrc }
      titleTextLabel={ props.titleTextLabel }
      firstNamePlaceholder={ props.firstNamePlaceholder }
      iconFirstNamePlaceholder={ props.iconFirstNamePlaceholder }
      lastNamePlaceholder={ props.lastNamePlaceholder }
      iconLastNamePlaceholder={ props.iconLastNamePlaceholder }
      fullNamePlaceholder={ props.fullNamePlaceholder }
      iconfullNamePlaceholder={ props.iconfullNamePlaceholder }
      phonePlaceholder={ props.phonePlaceholder }
      iconPhonePlaceholder={ props.iconPhonePlaceholder }
      mailPlaceholder={ props.mailPlaceholder }
      iconMailPlaceholder={ props.iconMailPlaceholder }
      passwordPlaceholder={ props.passwordPlaceholder }
      iconPasswordPlaceholder={ props.iconPasswordPlaceholder }
      confirmPasswordPlaceholder={ props.confirmPasswordPlaceholder }
      iconConfirmPasswordPlaceholder={ props.iconConfirmPasswordPlaceholder }
      useFullName={props.useFullName}
      usePhone={props.usePhone}
      useLogo={props.useLogo}
      btnPrimaryTextLabel={ props.btnPrimaryTextLabel }
      footerTextLabel={ props.footerTextLabel }
      footerLinkTextLabel={ props.footerLinkTextLabel }
      footerLinkUrl={ props.footerLinkUrl }
      formContainerClassName={ props.formContainerClassName }
      formClassName={ props.formClassName }
      logoFormClassName={ props.logoFormClassName }
      titleFormClassName={ props.titleFormClassName }
      inputFormClassName={ props.inputFormClassName }
      iconInputFormClassName={ props.iconInputFormClassName }
      btnPrimaryFormClassName={ props.btnPrimaryFormClassName }
      footerTextFormClassName={ props.footerTextFormClassName }
      footerLinkFormClassName={ props.footerLinkFormClassName }
    />
  )
}

export const AuthRequestResetPassword = (props) => {
  return (
    <RequestResetPassword
      logoFormSrc={ props.logoFormSrc }
      titleTextLabel={ props.titleTextLabel }
      mailPlaceholder={ props.mailPlaceholder }
      iconMailPlaceholder={ props.iconMailPlaceholder }
      btnPrimaryTextLabel={ props.btnPrimaryTextLabel }
      footerLinkTextLabel={ props.footerLinkTextLabel }
      footerLinkUrl={ props.footerLinkUrl }
      formContainerClassName={ props.formContainerClassName }
      formClassName={ props.formClassName }
      useLogo={props.useLogo}
      logoFormClassName={ props.logoFormClassName }
      titleFormClassName={ props.titleFormClassName }
      inputFormClassName={ props.inputFormClassName }
      iconInputFormClassName={ props.iconInputFormClassName }
      btnPrimaryFormClassName={ props.btnPrimaryFormClassName }
      footerLinkFormClassName={ props.footerLinkFormClassName } 
    />
  )
}

export const AuthResetPassword = (props) => {
  return (
    <ResetPassword 
      logoFormSrc={ props.logoFormSrc }
      titleTextLabel={ props.titleTextLabel }
      btnPrimaryTextLabel={ props.btnPrimaryTextLabel }
      resetCodePlaceholder={ props.resetCodePlaceholder }
      iconResetCodePlaceholder={ props.iconResetCodePlaceholder }
      passwordPlaceholder={ props.passwordPlaceholder }
      iconPasswordPlaceholder={ props.iconPasswordPlaceholder }
      confirmPasswordPlaceholder={ props.confirmPasswordPlaceholder }
      iconConfirmPasswordPlaceholder={ props.iconConfirmPasswordPlaceholder }
      useLogo={ props.useLogo }
      useResetCode={ props.useResetCode }
      formContainerClassName={ props.formContainerClassName }
      formClassName={ props.formClassName }
      logoFormClassName={ props.logoFormClassName }
      titleFormClassName={ props.titleFormClassName }
      inputFormClassName={ props.inputFormClassName }
      iconInputFormClassName={ props.iconInputFormClassName }
      btnPrimaryFormClassName={ props.btnPrimaryFormClassName }
    />
  )
}
