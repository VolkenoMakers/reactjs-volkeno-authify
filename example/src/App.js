import React from 'react'

import { AuthLogin } from 'reactjs-volkeno-authify'
import { AuthRegister } from 'reactjs-volkeno-authify'
import { AuthRequestResetPassword } from 'reactjs-volkeno-authify'
import { AuthResetPassword } from 'reactjs-volkeno-authify'
import 'reactjs-volkeno-authify/dist/index.css'

// 
const App = () => {
  return (
    <AuthLogin
      logoFormSrc={ '' }
      titleTextLabel={ '' }
      resetPwdTextLabel={ '' }
      resetPwdUrlFormClassName={ '/' }
      btnPrimaryTextLabel={ '' }
      footerTextLabel={ '' }
      footerLinkTextLabel={ '' }
      footerLinkUrl={ '' }
      inputMailPlaceholder={ '' }
      iconInputMailPlaceholder={ '' }
      inputPwdPlaceholder={ '' }
      iconInputPwdPlaceholder={ '' }
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
