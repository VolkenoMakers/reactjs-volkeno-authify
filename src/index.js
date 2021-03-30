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
      inputMailPlaceholder={ props.inputMailPlaceholder }
      iconInputMailPlaceholder={ props.iconInputMailPlaceholder }
      inputPwdPlaceholder={ props.inputPwdPlaceholder }
      iconInputPwdPlaceholder={ props.iconInputPwdPlaceholder }
      resetPwdTextLabel={ props.resetPwdTextLabel }
      resetPwdUrlFormClassName={ props.resetPwdUrlFormClassName }
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
      resetPwdLinkFormClassName={ props.resetPwdLinkFormClassName }
      btnPrimaryFormClassName={ props.btnPrimaryFormClassName }
      footerTextFormClassName={ props.footerTextFormClassName }
      footerLinkFormClassName={ props.footerLinkFormClassName }
    />
  )
}

export const AuthRegister = () => {
  return (
    <div className="">
      <Register />
    </div>
  )
}

export const AuthRequestResetPassword = () => {
  return (
    <div className="">
      <RequestResetPassword />
    </div>
  )
}

export const AuthResetPassword = () => {
  return (
    <div className="">
      <ResetPassword />
    </div>
  )
}
