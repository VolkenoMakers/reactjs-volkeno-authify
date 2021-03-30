import React from 'react'

import { AuthLogin } from 'reactjs-volkeno-authify'
import { AuthRegister } from 'reactjs-volkeno-authify'
import { AuthRequestResetPassword } from 'reactjs-volkeno-authify'
import { AuthResetPassword } from 'reactjs-volkeno-authify'
import 'reactjs-volkeno-authify/dist/index.css'

// 
const App = () => {
  return (
    
    // <AuthResetPassword
    //   logoFormSrc={ '' }
    //   titleTextLabel={ '' }
    //   btnPrimaryTextLabel={ '' }
    //   resetCodePlaceholder={ '' }
    //   iconResetCodePlaceholder={ '' }
    //   passwordPlaceholder={ '' }
    //   iconPasswordPlaceholder={ '' }
    //   confirmPasswordPlaceholder={ '' }
    //   iconConfirmPasswordPlaceholder={ '' }
    //   useLogo
    //   useResetCode={false}
    //   formContainerClassName="form-container-reinit"
    //   formClassName="form-reinit"
    //   logoFormClassName="logo-formulaire-reinit"
    //   titleFormClassName="title-form-reinit"
    //   inputFormClassName="input-form-reinit"
    //   iconInputFormClassName="icon-input-form-reinit"
    //   btnPrimaryFormClassName="btn-form-reinit"
    // />
    
    // <AuthRequestResetPassword
    //   logoFormSrc={ '' }
    //   titleTextLabel={ '' }
    //   btnPrimaryTextLabel={ '' }
    //   footerLinkTextLabel={ '' }
    //   footerLinkUrl={ '' }
    //   mailPlaceholder={ '' }
    //   iconMailPlaceholder={ '' }
    //   useLogo
    //   formContainerClassName="form-container-request"
    //   formClassName="form-request"
    //   logoFormClassName="logo-formulaire"
    //   titleFormClassName="title-form-request"
    //   inputFormClassName="input-form-request"
    //   iconInputFormClassName="icon-input-form-request"
    //   btnPrimaryFormClassName="btn-form-request"
    //   footerLinkFormClassName="footer-link-form-request"
    
    // />
    
    // <AuthRegister 
    //   logoFormSrc={ '' }
    //   titleTextLabel={ '' }
    //   btnPrimaryTextLabel={ '' }
    //   footerTextLabel={ '' }
    //   footerLinkTextLabel={ '' }
    //   footerLinkUrl={ '' }
    //   firstNamePlaceholder={ '' }
    //   iconFirstNamePlaceholder={ '' }
    //   lastNamePlaceholder={ '' }
    //   iconLastNamePlaceholder={ '' }
    //   fullNamePlaceholder={ '' }
    //   iconfullNamePlaceholder={ '' }
    //   phonePlaceholder={ '' }
    //   iconPhonePlaceholder={ '' }
    //   mailPlaceholder={ '' }
    //   iconMailPlaceholder={ '' }
    //   passwordPlaceholder={ '' }
    //   iconPasswordPlaceholder={ '' }
    //   confirmPasswordPlaceholder={ '' }
    //   iconConfirmPasswordPlaceholder={ '' }
    //   useFullName={false}
    //   usePhone
    //   useLogo
    //   formContainerClassName="form-container-register"
    //   formClassName="form-register"
    //   logoFormClassName="logo-formulaire-register"
    //   titleFormClassName="title-form-register"
    //   inputFormClassName="input-form-register"
    //   iconInputFormClassName="icon-input-form-register"
    //   btnPrimaryFormClassName="btn-form-register"
    //   footerTextFormClassName="footer-form-register"
    //   footerLinkFormClassName="footer-link-form-register"
    // />
    
    <AuthLogin
      logoFormSrc={ '' }
      titleTextLabel={ '' }
      resetPwdTextLabel={ '' }
      resetPwdUrlFormClassName={ '/' }
      btnPrimaryTextLabel={ '' }
      footerTextLabel={ '' }
      footerLinkTextLabel={ '' }
      footerLinkUrl={ '' }
      mailPlaceholder={ '' }
      iconMailPlaceholder={ '' }
      passwordPlaceholder={ '' }
      iconPasswordPlaceholder={ '' }
      useLogo
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
    />
    )
}

export default App
