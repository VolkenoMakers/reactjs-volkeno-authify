import React, { useState } from 'react'
import styles from '../../index.css'
import _ from "lodash/fp"
import FeatherIcon from 'feather-icons-react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useLogin } from './authProvider'

export default function Login (props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loginInProgress, setLoginInProgress] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [loginError, setLoginError] = useState(false)
  
  const sideEffectOnsuccess = ({
    toastSuccessText: string = 'Bravo! Vous êtes connecté.'
  }) => {
    setLoginInProgress(false)
    toast.success(props.toastSuccessText || toastSuccessText)
    setLoginSuccess(true)
    props.onSuccessLogin()
   
  }

  const sideEffectOnfailure = ({
    toastErrorText: string = 'Oups! Une erreur est survenu. Veuillez réessayer!'
  }) => {
    toast.error(props.toastErrorText || toastErrorText)
    loginError(true)
    props.onFailLogin()
  }
  
  const onSubmit = (data) => {
    setLoginInProgress(true)
  
    if (!(props.setApiBase && props.setEndpoint)) {
      return toast.error("Veuillez renseigner la base de l'api ainsi que le endpoint")
    }
    useLogin(data, setApiBase, setEndpoint, sideEffectOnsuccess, sideEffectOnfailure)

  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`p-sm-5 py-5 px-4 ${styles.formLoginRegister} ${props.formClassName}`}>
      {props.useLogo ?
        props.logoFormSrc ?
          <span className={`${styles.logo_form} ${props.logoFormClassName} `} style={{ background: `url(${props.logoFormSrc})` }}></span>
          :
          <span className={`${styles.logo_form} ${props.logoFormClassName} `} style={{ background: `url(http://via.placeholder.com/200/C4C9C7/FFFFFF)` }}></span>
        :
        <span></span>
      }
      <span className={`mb-sm-4 mb-3 ${styles.formLoginRegisterTitle} ${props.titleFormClassName}`}>
          <span>{titleTextLabel || "Connectez-vous"}</span>
      </span>
      <div className='form-group position-relative'>
        <span className={styles.formLoginRegisterPrepend}>
            <FeatherIcon className={`${props.iconInputFormClassName}`} icon={props.iconMailPlaceholder || 'mail'} />
        </span>
          <div>
            <input
              type='email'
              name={props.emailName}
              className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
              placeholder={props.mailPlaceholder || 'Adresse mail'}
              maxLength="" 
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
            {_.get(`${props.emailName}.type`, errors) === "required" && (
                <p className={`${styles.textDangerRVA}`}>{ props.emailRequiredTextError || "Ce champ est requis!" }</p>
            )}
            {_.get(`${props.emailName}.type`, errors) === "pattern" && (
                <p className={`${styles.textDangerRVA}`}>{ props.emailValidTextError || "Veuillez saisir une adresse e-mail valide!" }</p>
            )}
          </div>
      </div>
      <div className='form-group position-relative'>
        <span className={styles.formLoginRegisterPrepend}>
            <FeatherIcon className={`${props.iconInputFormClassName}`} icon={props.iconPasswordPlaceholder || 'lock'} />
        </span>
          <div>
            <input
              type='password'
              name={props.passwordName}
              className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
              placeholder={props.passwordPlaceholder || "Mot de passe"}
              ref={register({
                required: true,
              })}
            />
            {_.get(`${props.passwordName}.type`, errors) === "required" && (
                <p className={`${styles.textDangerRVA}`}>{ props.passwordRequiredTextError || "Ce champ est requis!" }</p>
            )}
          </div>
         
      </div>
        <a className={`${styles.formLoginRegisterForgotPasswordLink} ${props.resetPwdLinkFormClassName}`} href={`${props.resetPwdUrl}`}>
          {props.resetPwdTextLabel || "Mot de passe oublié ?"}
        </a>

        <div>
          {loginInProgress ?
              <button
                className={`mt-5 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
                disabled
              > 
                {props.btnPrimaryProgressTextLabel || "Connexion en cours ..."}
              </button>
            :
            <button
              className={`mt-5 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
            > 
              {props.btnPrimaryTextLabel || "Connexion"}
            </button>
          }
        </div>
        <p className={`${styles.formLoginRegisterFooter} ${props.footerTextFormClassName}`}>
          {props.footerTextLabel || " Pas encore de compte ?"}
          
          <a
            href='#'
            className={`ml-1 ${styles.formLoginRegisterFooterLink} ${props.footerLinkFormClassName}`}
          >
            {props.footerLinkTextLabel || "S’inscrire"}
          </a>
        </p>
    
      {setLoginSuccess || setLoginError ?
        <ToastContainer className={`${styles.toastifyText} ${props.toastTextClassName}`} autoClose={2500} />
        :
        <></>
      }
    </form>
  )
}

