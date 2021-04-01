import React, { useState, useRef } from 'react'
import styles from '../../index.css'
import FeatherIcon from 'feather-icons-react'
import _ from "lodash/fp"
import { useForm } from "react-hook-form"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export default function Register(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [registerInProgress, setRegisterInProgress] = useState(false)
  const [registerSuccess, setRegisterSuccess] = useState(false)
  const [registerError, setRegisterError] = useState(false)
  
  const password = useRef({});
  password.current = watch(`${props.passwordName}`, "");
  
  const onSubmit = (data) => {
    setRegisterInProgress(true)
    
    let setApiBase = props.setApiBase
    let setEndpoint = props.setEndpoint
  
    if (setApiBase && setEndpoint) {
      var url = setApiBase+setEndpoint
      
      axios.post(url, data)
        .then(response => {
          setRegisterInProgress(false)
          setRegisterSuccess(true)
          if ((response.status >= 200 || response.status <= 299) || (response.data.success) || (response.success)) {
            if (props.toastSuccessText) {
              toast.success(`${props.toastSuccessText}`);
            } else {
              toast.success("Bravo! Vous êtes inscrit.");
            }
            
            setTimeout(() => {
              setRegisterSuccess(false)
              props.onSuccessRegister()
            }, 2500);
          }
        })
        .catch(error => {
          setRegisterError(true)
          setRegisterInProgress(false)
          if(error){
            if (props.toastErrorText) {
              toast.error(`${props.toastErrorText}`);
            } else {
              toast.error("Oups! Une erreur est survenu. Veuillez réessayer!");
            }
            
            setTimeout(() => {
              setRegisterError(false)
              props.onFailRegister()
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
          <span>Inscrivez-vous</span>
        }
      </span>
      {props.useFullName ?
        <div className='form-group position-relative'>
          <span className={styles.formLoginRegisterPrepend}>
            {props.iconfullNamePlaceholder ?
              <FeatherIcon className={`${props.iconInputFormClassName}`} icon={`${props.iconfullNamePlaceholder}`} />
              :
              <FeatherIcon className={`${props.iconInputFormClassName}`} icon='user' />
            }
          </span>
          {props.fullNamePlaceholder ?
            <div>
              <input
                type='text'
                name={props.fullnameName}
                ref={register({
                  required: true,
                  pattern: /^[A-Za-z]+$/i
                })}
                className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                placeholder={`${props.fullNamePlaceholder}`}
              />
              {_.get(`${props.fullnameName}.type`, errors) === "required" && (
                props.fullnameRequiredTextError ?
                  <p className={`${styles.textDangerRVA}`}>{ props.fullnameRequiredTextError }</p>
                :
                  <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
              )}
              {_.get(`${props.fullnameName}.type`, errors) === "pattern" && (
                props.fullnameValidTextError ?
                  <p className={`${styles.textDangerRVA}`}>{ props.fullnameValidTextError }</p>
                :
                  <p className={`${styles.textDangerRVA}`}>Caractères alphabétiques uniquement!</p>
              )}
            </div>
            :
            <div>
              <input
                type='text'
                name={props.fullnameName}
                ref={register({
                  required: true,
                  pattern: /^[A-Za-z]+$/i
                })}
                className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                placeholder='Prénom & Nom'
              />
              {_.get(`${props.fullnameName}.type`, errors) === "required" && (
                props.fullnameRequiredTextError ?
                  <p className={`${styles.textDangerRVA}`}>{ props.fullnameRequiredTextError }</p>
                :
                  <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
              )}
              {_.get(`${props.fullnameName}.type`, errors) === "pattern" && (
                props.fullnameValidTextError ?
                  <p className={`${styles.textDangerRVA}`}>{ props.fullnameValidTextError }</p>
                :
                  <p className={`${styles.textDangerRVA}`}>Caractères alphabétiques uniquement!</p>
              )}
            </div>
          }
        </div>
        :
        <div>
          <div className='form-group position-relative'>
            <span className={styles.formLoginRegisterPrepend}>
              {props.iconFirstNamePlaceholder ?
                <FeatherIcon className={`${props.iconInputFormClassName}`} icon={`${props.iconFirstNamePlaceholder}`} />
                :
                <FeatherIcon className={`${props.iconInputFormClassName}`} icon='user' />
              }
            </span>
            {props.firstNamePlaceholder ?
              <div>
                <input
                  type='text'
                  name={props.firstnameName}
                  ref={register({
                    required: true,
                    pattern: /^[A-Za-z]+$/i
                  })}
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder={`${props.firstNamePlaceholder}`}
                />
                {_.get(`${props.firstnameName}.type`, errors) === "required" && (
                  props.fullnameRequiredTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.firstnameRequiredTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
                )}
                {_.get(`${props.firstnameName}.type`, errors) === "pattern" && (
                  props.fullnameValidTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.firstnameValidTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Caractères alphabétiques uniquement!</p>
                )}
              </div>
              :
              <div>
                <input
                  type='text'
                  name={props.firstnameName}
                  ref={register({
                    required: true,
                    pattern: /^[A-Za-z]+$/i
                  })}
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder='Prénom'
                />
                {_.get(`${props.firstnameName}.type`, errors) === "required" && (
                  props.firstnameValidTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.firstnameRequiredTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
                )}
                {_.get(`${props.firstnameName}.type`, errors) === "pattern" && (
                  props.firstnameValidTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.firstnameValidTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Caractères alphabétiques uniquement!</p>
                )}
              </div>
            }
          </div>
          <div className='form-group position-relative'>
            <span className={styles.formLoginRegisterPrepend}>
              {props.iconLastNamePlaceholder ?
                <FeatherIcon className={`${props.iconInputFormClassName}`} icon={`${props.iconLastNamePlaceholder}`} />
                :
                <FeatherIcon className={`${props.iconInputFormClassName}`} icon='user' />
              }
            </span>
            {props.lastNamePlaceholder ?
              <div>
                <input
                  type='text'
                  name={props.lastnameName}
                  ref={register({
                    required: true,
                    pattern: /^[A-Za-z]+$/i
                  })}
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder={`${props.lastNamePlaceholder}`}
                />
                {_.get(`${props.lastnameName}.type`, errors) === "required" && (
                  props.lastnameRequiredTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.lastnameRequiredTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
                )}
                {_.get(`${props.lastnameName}.type`, errors) === "pattern" && (
                  props.lastnameValidTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.lastnameValidTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Caractères alphabétiques uniquement!</p>
                )}
              </div>
              :
              <div>
                <input
                  type='text'
                  name={props.lastnameName}
                  ref={register({
                    required: true,
                    pattern: /^[A-Za-z]+$/i
                  })}
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder='Nom'
                />
                {_.get(`${props.lastnameName}.type`, errors) === "required" && (
                  props.lastnameRequiredTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.lastnameRequiredTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
                )}
                {_.get(`${props.lastnameName}.type`, errors) === "pattern" && (
                  props.lastnameValidTextError ?
                    <p className={`${styles.textDangerRVA}`}>{ props.lastnameValidTextError }</p>
                  :
                    <p className={`${styles.textDangerRVA}`}>Caractères alphabétiques uniquement!</p>
                )}
              </div>
            }
          </div>
        </div>
      }
      {props.usePhone ?
        <div className='form-group position-relative'>
          <span className={styles.formLoginRegisterPrepend}>
            {props.iconPhonePlaceholder ?
              <FeatherIcon className={`${props.iconInputFormClassName}`} icon={`${props.iconPhonePlaceholder}`} />
              :
              <FeatherIcon className={`${props.iconInputFormClassName}`} icon='phone' />
            }
          </span>
          {props.phonePlaceholder ?
            <div>
              <input
                type='number'
                name={props.phoneName}
                maxLength="20"
                minLength="5"
                ref={register({
                  required: true,
                })}
                className={`form-control ${styles.formLoginRegisterInput} ${styles.numberInputCustom} ${props.inputFormClassName}`}
                placeholder={`${props.phonePlaceholder}`}
              />
              {_.get(`${props.phoneName}.type`, errors) === "required" && (
                props.phoneRequiredTextError ?
                  <p className={`${styles.textDangerRVA}`}>{ props.phoneRequiredTextError }</p>
                :
                  <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
              )}
            </div>
            :
            <div>
              <input
                type='number'
                name={props.phoneName}
                maxLength="20"
                minLength="5"
                ref={register({
                  required: true,
                })}
                className={`form-control ${styles.formLoginRegisterInput} ${styles.numberInputCustom} ${props.inputFormClassName}`}
                placeholder='Téléphone'
              />
              {_.get(`${props.phoneName}.type`, errors) === "required" && (
                props.phoneRequiredTextError ?
                  <p className={`${styles.textDangerRVA}`}>{ props.phoneRequiredTextError }</p>
                :
                  <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
              )}
            </div>
          }
        </div>
        :
        <span></span>
      }
      
      {props.useAddress ?
        <div className='form-group position-relative'>
          <span className={styles.formLoginRegisterPrepend}>
            {props.iconAddressPlaceholder ?
              <FeatherIcon className={`${props.iconInputFormClassName}`} icon={`${props.iconAddressPlaceholder}`} />
              :
              <FeatherIcon className={`${props.iconInputFormClassName}`} icon='map-pin' />
            }
          </span>
          {props.addressPlaceholder ?
            <div>
              <input
                type='text'
                name={props.addressName}
                ref={register({
                  required: true,
                })}
                className={`form-control ${styles.formLoginRegisterInput} ${styles.numberInputCustom} ${props.inputFormClassName}`}
                placeholder={`${props.addressPlaceholder}`}
              />
              {_.get(`${props.addressName}.type`, errors) === "required" && (
                props.addressRequiredTextError ?
                  <p className={`${styles.textDangerRVA}`}>{ props.addressRequiredTextError }</p>
                :
                  <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
              )}
            </div>
            :
            <div>
              <input
                type='text'
                name={props.addressName}
                ref={register({
                  required: true,
                })}
                className={`form-control ${styles.formLoginRegisterInput} ${styles.numberInputCustom} ${props.inputFormClassName}`}
                placeholder='Adresse'
              />
              {_.get(`${props.addressName}.type`, errors) === "required" && (
                props.addressRequiredTextError ?
                  <p className={`${styles.textDangerRVA}`}>{ props.addressRequiredTextError }</p>
                :
                  <p className={`${styles.textDangerRVA}`}>Ce champ est requis!</p>
              )}
            </div>
          }
        </div>
        :
        <span></span>
      }
      
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
              placeholder='Mot de passe'
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
              placeholder='Confirmer mot de passe'
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
      

      {props.btnPrimaryTextLabel ?
        <button
          className={`mt-5 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
        > 
          {props.btnPrimaryTextLabel}
        </button>
        :
        <button
          className={`mt-5 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
        > 
          Inscription
        </button>
      }
      {props.footerTextLabel ?
        <p className={`${styles.formLoginRegisterFooter} ${props.footerTextFormClassName}`}>
          {props.footerTextLabel}
          
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
            <span>Se connecter</span>
          </a>
          }
        </p>
        :
        <p className={`${styles.formLoginRegisterFooter} ${props.footerTextFormClassName}`}>
          Déja inscrit ?
          
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
            <span>Se connecter</span>
          </a>
          }
        </p>
    
      }
      
      {setRegisterSuccess || setRegisterError ?
        <ToastContainer className={`${styles.toastifyText} ${props.toastTextClassName}`} autoClose={2500} />
        :
        <></>
      }
    </form>
  )
}

