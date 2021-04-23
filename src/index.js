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
      resetPwdUrl={ props.resetPwdUrl }
      btnPrimaryTextLabel={ props.btnPrimaryTextLabel }
      btnPrimaryProgressTextLabel={ props.btnPrimaryProgressTextLabel }
      footerTextLabel={ props.footerTextLabel }
      footerLinkTextLabel={ props.footerLinkTextLabel }
      footerLinkUrl={ props.footerLinkUrl }
      emailRequiredTextError= { props.emailRequiredTextError }
      emailValidTextError= { props.emailValidTextError }
      passwordRequiredTextError= { props.passwordRequiredTextError }
      emailName={ props.emailName }
      passwordName={ props.passwordName }
      setApiBase={ props.setApiBase }
      setEndpoint={ props.setEndpoint }
      keyToken={ props.keyToken }
      toastSuccessText={ props.toastSuccessText }
      toastErrorText={ props.toastErrorText }
      onSuccessLogin={ props.onSuccessLogin }
      onFailLogin={ props.onFailLogin }
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
      toastTextClassName={ props.toastTextClassName }
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
      addressPlaceholder={ props.addressPlaceholder }
      iconAddressPlaceholder={ props.iconAddressPlaceholder }
      phonePlaceholder={ props.phonePlaceholder }
      iconPhonePlaceholder={ props.iconPhonePlaceholder }
      mailPlaceholder={ props.mailPlaceholder }
      iconMailPlaceholder={ props.iconMailPlaceholder }
      passwordPlaceholder={ props.passwordPlaceholder }
      iconPasswordPlaceholder={ props.iconPasswordPlaceholder }
      confirmPasswordPlaceholder={ props.confirmPasswordPlaceholder }
      iconConfirmPasswordPlaceholder={ props.iconConfirmPasswordPlaceholder }
      firstnameName={ props.firstnameName }
      lastnameName={ props.lastnameName }
      fullnameName={ props.fullnameName }
      phoneName={ props.phoneName }
      addressName={ props.addressName }
      emailName={ props.emailName }
      passwordName={ props.passwordName }
      confirmPasswordName={ props.confirmPasswordName }
      fullnameRequiredTextError= { props.fullnameRequiredTextError }
      fullnameValidTextError= { props.fullnameValidTextError }
      firstnameRequiredTextError= { props.firstnameRequiredTextError }
      firstnameValidTextError= { props.firstnameValidTextError }
      lastnameRequiredTextError= { props.lastnameRequiredTextError }
      lastnameValidTextError= { props.lastnameValidTextError }
      phoneRequiredTextError= { props.phoneRequiredTextError }
      addressRequiredTextError= { props.addressRequiredTextError }
      emailRequiredTextError= { props.emailRequiredTextError }
      emailValidTextError= { props.emailValidTextError }
      passwordRequiredTextError= { props.passwordRequiredTextError }
      confirmPasswordRequiredTextError= { props.confirmPasswordRequiredTextError }
      confirmPasswordSameTextError= { props.confirmPasswordSameTextError }
      toastSuccessText={ props.toastSuccessText }
      toastErrorText={ props.toastErrorText }
      useFullName={props.useFullName}
      usePhone={props.usePhone}
      useLogo={props.useLogo}
      useAddress={ props.useAddress }
      onSuccessRegister={ props.onSuccessRegister }
      onFailRegister={ props.onFailRegister }
      btnPrimaryTextLabel={ props.btnPrimaryTextLabel }
      footerTextLabel={ props.footerTextLabel }
      footerLinkTextLabel={ props.footerLinkTextLabel }
      footerLinkUrl={ props.footerLinkUrl }
      setApiBase={ props.setApiBase }
      setEndpoint={ props.setEndpoint }
      formContainerClassName={ props.formContainerClassName }
      formClassName={ props.formClassName }
      logoFormClassName={ props.logoFormClassName }
      titleFormClassName={ props.titleFormClassName }
      inputFormClassName={ props.inputFormClassName }
      iconInputFormClassName={ props.iconInputFormClassName }
      btnPrimaryFormClassName={ props.btnPrimaryFormClassName }
      footerTextFormClassName={ props.footerTextFormClassName }
      footerLinkFormClassName={ props.footerLinkFormClassName }
      toastTextClassName={ props.toastTextClassName }
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
      footerTextFormClassName={ props.footerTextFormClassName }
      footerLinkFormClassName={ props.footerLinkFormClassName } 
      toastTextClassName={ props.toastTextClassName }
      setApiBase={ props.setApiBase }
      setEndpoint={ props.setEndpoint }
      onSuccessRequestPassword={ props.onSuccessRequestPassword }
      onFailRequestPassword={ props.onFailRequestPassword }
      toastSuccessText={ props.toastSuccessText }
      toastErrorText={ props.toastErrorText }
      emailRequiredTextError= { props.emailRequiredTextError }
      emailValidTextError= { props.emailValidTextError }
      emailName={ props.emailName }
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
      toastTextClassName={ props.toastTextClassName }
      setApiBase={ props.setApiBase }
      setEndpoint={ props.setEndpoint }
      onSuccessResetPassword={ props.onSuccessResetPassword }
      onFailResetPassword={ props.onFailResetPassword }
      toastSuccessText={ props.toastSuccessText }
      toastErrorText={ props.toastErrorText }
      resetCodeName={ props.resetCodeName }
      resetCodeRequiredTextError={ props.resetCodeRequiredTextError }
      passwordName={ props.passwordName }
      confirmPasswordName={ props.confirmPasswordName }
      passwordRequiredTextError= { props.passwordRequiredTextError }
      confirmPasswordRequiredTextError= { props.confirmPasswordRequiredTextError }
      confirmPasswordSameTextError= { props.confirmPasswordSameTextError }
    />
  )
}
