import React, { useState, useRef } from 'react'
import styles from '../../index.css'
import FeatherIcon from 'feather-icons-react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import _ from "lodash/fp";

const ResetPassword = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [resetPasswordInProgress, setResetPasswordInProgress] = useState(false)
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false)
  const [resetPasswordError, setResetPasswordError] = useState(false)
  
  const password = useRef({});
  password.current = watch(`${props.passwordName}`, "");
  
  const onSubmit = (data) => {
    setResetPasswordInProgress(true)
    
    let setApiBase = props.setApiBase
    let setEndpoint = props.setEndpoint
  
    if (setApiBase && setEndpoint) {
      var url = setApiBase+setEndpoint
      
      axios.post(url, data)
        .then(response => {
          setResetPasswordInProgress(false)
          setResetPasswordSuccess(true)
          if ((response.status >= 200 || response.status <= 299) || (response.data.success) || (response.success)) {
            if (props.toastSuccessText) {
              toast.success(`${props.toastSuccessText}`);
            } else {
              toast.success("Bravo! Votre mot de passe à été reinitialisé.");
            }
            
            window.sessionStorage.setItem(`${props.keyToken}`, response.data.token)
            
            setTimeout(() => {
              setResetPasswordSuccess(false)
              props.onSuccessRequestPassword()
            }, 2500);
          }
        })
        .catch(error => {
          setResetPasswordError(true)
          setResetPasswordInProgress(false)
          if(error){
            if (props.toastErrorText) {
              toast.error(`${props.toastErrorText}`);
            } else {
              toast.error("Oups! Une erreur est survenu. Veuillez réessayer!");
            }
            
            setTimeout(() => {
              setResetPasswordError(false)
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
          <span>Nouveau mot de passe</span>
        }
      </span>
      {props.useResetCode ?
          <div className='form-group position-relative'>
            <span className={styles.formLoginRegisterPrepend}>
              {props.iconResetCodePlaceholder ?
                <FeatherIcon className={`${props.iconInputFormClassName}`} icon={`${props.iconResetCodePlaceholder}`} />
                :
                <FeatherIcon className={`${props.iconInputFormClassName}`} icon='lock' />
              }
            </span>
            {props.resetCodePlaceholder ?
              <div>
                <input
                  type='number'
                  name={props.resetCodeName}
                  ref={register({
                    required: true,
                    minLength: true,
                  })}
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName} ${styles.numberInputCustom}`}
                  placeholder={`${props.resetCodePlaceholder}`}
                />
                {_.get(`${props.phoneName}.type`, errors) === "required" && (
                  props.resetCodeRequiredTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.resetCodeRequiredTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
                )}
              </div>
              :
              <div>
                <input
                  type='number'
                  name={props.resetCodeName}
                  ref={register({
                    required: true,
                  })}
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}  ${styles.numberInputCustom}`}
                  placeholder='Saisir le code'
                />
                {_.get(`${props.phoneName}.type`, errors) === "required" && (
                  props.resetCodeRequiredTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.resetCodeRequiredTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
                )}
              </div>
              
            }
          </div>
        :
        <div>
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
                  ref={register({
                    required: true,
                  })}
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder={`${props.passwordPlaceholder}`}
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
                  ref={register({
                    required: true,
                  })}
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder='Saisir votre nouveau mot de passe'
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
          <div className='form-group position-relative'>
            <span className={styles.formLoginRegisterPrepend}>
              {props.iconConfirmPasswordPlaceholder ?
                <FeatherIcon className={`${props.iconInputFormClassName}`} icon={`${props.iconConfirmPasswordPlaceholder}`} />
                :
                <FeatherIcon className={`${props.iconInputFormClassName}`} icon='lock' />
              }
            </span>
            {props.confirmPasswordPlaceholder ?
              <div>
                <input
                  type='password'
                  name={props.confirmPasswordName}
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder={`${props.confirmPasswordPlaceholder}`}
                  ref={register({
                    required: true,
                    validate: value =>
                      value === password.current
                  })}
                />
                {_.get(`${props.confirmPasswordName}.type`, errors) === "required" && (
                  props.confirmPasswordRequiredTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.confirmPasswordRequiredTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
                )}
                {_.get(`${props.confirmPasswordName}.type`, errors) === "validate" && (
                  props.confirmPasswordSameTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.confirmPasswordSameTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Les mot de passe ne correspondent pas!</p>
                )}
              </div>
              :
              <div>
                <input
                  type='password'
                  name={props.confirmPasswordName}
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder='Confirmer votre mot de passe'
                  ref={register({
                    required: true,
                    validate: value =>
                      value === password.current
                  })}
                />
                {_.get(`${props.confirmPasswordName}.type`, errors) === "required" && (
                  props.confirmPasswordRequiredTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.confirmPasswordRequiredTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
                )}
                {_.get(`${props.confirmPasswordName}.type`, errors) === "validate" && (
                  props.confirmPasswordSameTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.confirmPasswordSameTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Les mot de passe ne correspondent pas!</p>
                )}
              </div>
            }
          </div>
        </div>
      }
      
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
      
      {setResetPasswordSuccess || setResetPasswordError ?
        <ToastContainer className={`${styles.toastifyText} ${props.toastTextClassName}`} autoClose={2500} />
        :
        <></>
      }
    </form>
  )
}
export default ResetPassword
