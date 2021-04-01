import React, { useState } from 'react'
import styles from '../../index.css'
import _ from "lodash/fp"
import FeatherIcon from 'feather-icons-react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export default function Login (props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loginInProgress, setLoginInProgress] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [loginError, setLoginError] = useState(false)
  
  const onSubmit = (data) => {
    setLoginInProgress(true)
    
    let setApiBase = props.setApiBase
    let setEndpoint = props.setEndpoint
  
    if (setApiBase && setEndpoint) {
      var url = setApiBase+setEndpoint
      
      axios.post(url, data)
        .then(response => {
          setLoginInProgress(false)
          setLoginSuccess(true)
          if ((response.status >= 200 || response.status <= 299) || (response.data.success) || (response.success)) {
            if (props.toastSuccessText) {
              toast.success(`${props.toastSuccessText}`);
            } else {
              toast.success("Bravo! Vous êtes connecté.");
            }
            
            window.sessionStorage.setItem(`${props.keyToken}`, response.data.token)
            
            setTimeout(() => {
              setLoginSuccess(false)
              props.onSuccessLogin()
            }, 2500);
          }
        })
        .catch(error => {
          setLoginError(true)
          setLoginInProgress(false)
          if(error){
            if (props.toastErrorText) {
              toast.error(`${props.toastErrorText}`);
            } else {
              toast.error("Oups! Une erreur est survenu. Veuillez réessayer!");
            }
            
            setTimeout(() => {
              setLoginError(false)
              props.onFailLogin()
            }, 2500);
          }
        })
    }
    else{
      console.log("Veuillez renseigner la base de l'api ainsi que le endpoint")
    }
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
        {props.titleTextLabel ?
          props.titleTextLabel
          :
          <span>Connectez-vous</span>
        }
      </span>
      <div className='form-group position-relative'>
        <span className={styles.formLoginRegisterPrepend}>
          {props.iconMailPlaceholder ?
            <FeatherIcon className={`${props.iconInputFormClassName}`} icon={`${props.iconMailPlaceholder}`} />
            :
            <FeatherIcon className={`${props.iconInputFormClassName}`} icon='mail' />
          }
        </span>
        {props.mailPlaceholder ?
          <div>
            <input
              type='email'
              name={props.emailName}
              className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
              placeholder={`${props.mailPlaceholder}`}
              maxLength="" 
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
            {_.get(`${props.emailName}.type`, errors) === "required" && (
              props.emailRequiredTextError ?
                <p className={`${styles.textDangerRVA}`}>{ props.emailRequiredTextError }</p>
              :
                <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
            )}
            {_.get(`${props.emailName}.type`, errors) === "pattern" && (
              props.emailValidTextError ?
                <p className={`${styles.textDangerRVA}`}>{ props.emailValidTextError }</p>
              :
                <p className={`${styles.textDangerRVA}`}>Veuillez saisir une adresse e-mail valide!</p>
            )}
          </div>
          :
          <div>
            <input
              type='email'
              name={props.emailName}
              className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
              placeholder='Adresse mail'
              maxLength="" 
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
            {_.get(`${props.emailName}.type`, errors) === "required" && (
              props.emailRequiredTextError ?
                <p className={`${styles.textDangerRVA}`}>{ props.emailRequiredTextError }</p>
              :
                <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
            )}
            {_.get(`${props.emailName}.type`, errors) === "pattern" && (
              props.emailValidTextError ?
                <p className={`${styles.textDangerRVA}`}>{ props.emailValidTextError }</p>
              :
                <p className={`${styles.textDangerRVA}`}>Veuillez saisir une adresse e-mail valide!</p>
            )}
          </div>
        }
      </div>
      <div className='form-group position-relative'>
        <span className={styles.formLoginRegisterPrepend}>
          {props.iconPasswordPlaceholder ?
            <FeatherIcon className={`${props.iconInputFormClassName}`} icon={`${props.iconPasswordPlaceholder}`} />
            :
            <FeatherIcon className={`${props.iconInputFormClassName}`} icon='lock' />
          }
        </span>
        {props.passwordPlaceholder ?
          <div>
            <input
              type='password'
              name={props.passwordName}
              className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
              placeholder={`${props.passwordPlaceholder}`}
              ref={register({
                required: true,
              })}
            />
            {_.get(`${props.passwordName}.type`, errors) === "required" && (
              props.passwordRequiredTextError ?
                <p className={`${styles.textDangerRVA}`}>{ props.passwordRequiredTextError }</p>
              :
                <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
            )}
          </div>
          :
          <div>
            <input
              type='password'
              name={props.passwordName}
              className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
              placeholder="Mot de passe"
              ref={register({
                required: true,
              })}
            />
            {_.get(`${props.passwordName}.type`, errors) === "required" && (
              props.passwordRequiredTextError ?
                <p className={`${styles.textDangerRVA}`}>{ props.passwordRequiredTextError }</p>
              :
                <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
            )}
          </div>
        }
      </div>
      
      {props.resetPwdTextLabel ?
        <a className={`${styles.formLoginRegisterForgotPasswordLink} ${props.resetPwdLinkFormClassName}`} href={`${props.resetPwdUrlFormClassName}`}>
          {props.resetPwdTextLabel}
        </a>
        :
        <a className={`${styles.formLoginRegisterForgotPasswordLink} ${props.resetPwdLinkFormClassName}`} href={`${props.resetPwdUrlFormClassName}`}>
          Mot de passe oublié ?
        </a>
      }

      {props.btnPrimaryTextLabel ?
        <div>
          {loginInProgress ?
            props.btnPrimaryProgressTextLabel ?
              <button
                className={`mt-5 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
                disabled
              > 
                {props.btnPrimaryProgressTextLabel}
              </button>
              :
              <button
                className={`mt-5 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
                disabled
              > 
                Connexion en cours ...
              </button>
            :
            <button
              className={`mt-5 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
            > 
              {props.btnPrimaryTextLabel}
            </button>
          }
        </div>
        :
        <div>
          {loginInProgress ?
            props.btnPrimaryProgressTextLabel ?
              <button
                className={`mt-5 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
                disabled
              > 
                {props.btnPrimaryProgressTextLabel}
              </button>
              :
              <button
                className={`mt-5 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
                disabled
              > 
                Connexion en cours ...
              </button>
            :
            <button
              className={`mt-5 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
            > 
              Connexion
            </button>
          }
        </div>
      }
      {props.footerTextLabel ?
        <p className={`${styles.formLoginRegisterFooter} ${props.footerTextFormClassName}`}>
          {props.footerTextLabel}
          
          {props.footerLinkTextLabel ?
          <a
            href='#'
            className={`ml-1 ${styles.formLoginRegisterFooterLink} ${props.footerLinkFormClassName}`}
          >
            {props.footerLinkTextLabel}
          </a>
          :
          <a
            href='#'
            className={`ml-1 ${styles.formLoginRegisterFooterLink} ${props.footerLinkFormClassName}`}
          >
            <span>S’inscrire</span>
          </a>
          }
        </p>
        :
        <p className={`${styles.formLoginRegisterFooter} ${props.footerTextFormClassName}`}>
          Pas encore de compte ?
          
          {props.footerLinkTextLabel ?
          <a
            href={props.footerLinkUrl}
            className={`ml-1 ${styles.formLoginRegisterFooterLink} ${props.footerLinkFormClassName}`}
          >
            {props.footerLinkTextLabel}
          </a>
          :
          <a
            href={props.footerLinkUrl}
            className={`ml-1 ${styles.formLoginRegisterFooterLink} ${props.footerLinkFormClassName}`}
          >
            <span>S’inscrire</span>
          </a>
          }
        </p>
    
      }
      {setLoginSuccess ?
        <ToastContainer className={`${styles.toastifyText} ${props.toastTextClassName}`} autoClose={2500} />
        :
        <></>
      }
    </form>
  )
}
// export default Login
