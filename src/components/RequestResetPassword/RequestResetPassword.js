import React, { useState } from 'react'
import styles from '../../index.css'
import FeatherIcon from 'feather-icons-react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import _ from "lodash/fp";

const RequestResetPassword = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [requestPasswordInProgress, setRequestPasswordInProgress] = useState(false)
  const [requestPasswordSuccess, setRequestPasswordSuccess] = useState(false)
  const [requestPasswordError, setRequestPasswordError] = useState(false)
  
  const onSubmit = (data) => {
    setRequestPasswordInProgress(true)
    
    let setApiBase = props.setApiBase
    let setEndpoint = props.setEndpoint
  
    if (setApiBase && setEndpoint) {
      var url = setApiBase+setEndpoint
      
      axios.post(url, data)
        .then(response => {
          setRequestPasswordInProgress(false)
          setRequestPasswordSuccess(true)
          if ((response.status >= 200 || response.status <= 299) || (response.data.success) || (response.success)) {
            if (props.toastSuccessText) {
              toast.success(`${props.toastSuccessText}`);
            } else {
              toast.success("Bravo! Votre demande à été envoyé.");
            }
            
            window.sessionStorage.setItem(`${props.keyToken}`, response.data.token)
            
            setTimeout(() => {
              setRequestPasswordSuccess(false)
              props.onSuccessRequestPassword()
            }, 2500);
          }
        })
        .catch(error => {
          setRequestPasswordError(true)
          setRequestPasswordInProgress(false)
          if(error){
            if (props.toastErrorText) {
              toast.error(`${props.toastErrorText}`);
            } else {
              toast.error("Oups! Une erreur est survenu. Veuillez réessayer!");
            }
            
            setTimeout(() => {
              setRequestPasswordError(false)
              props.onFailRequestPassword()
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
      <span className={`mb-sm-4 mb-3 ${styles.formLoginRegisterTitle} ${styles.formLoginRegisterTitleRP} ${props.titleFormClassName}`}>
        {props.titleTextLabel ?
          props.titleTextLabel
          :
          <span>Modifier votre mot de passe</span>
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

      {props.btnPrimaryTextLabel ?
        <button
          className={`mt-3 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
        > 
          {props.btnPrimaryTextLabel}
        </button>
        :
        <button
          className={`mt-3 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
        > 
          Terminer
        </button>
      }
      
      <p className={' ' + styles.formLoginRegisterFooter}>
        
        {props.footerLinkTextLabel ?
          <a
            href={props.footerLinkUrl}
            className={`${styles.formLoginRegisterFooterLink} ${props.footerLinkFormClassName}`}
          >
            {props.footerLinkTextLabel}
          </a>
          :
          <a
            href={props.footerLinkUrl}
            className={`${styles.formLoginRegisterFooterLink} ${props.footerLinkFormClassName}`}
          >
            <span>Se connecter</span>
          </a>
        }
      </p>
      {setRequestPasswordSuccess || setRequestPasswordError ?
        <ToastContainer className={`${styles.toastifyText} ${props.toastTextClassName}`} autoClose={2500} />
        :
        <></>
      }
    </form>
  )
}
export default RequestResetPassword
