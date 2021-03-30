import React from 'react'
import styles from '../../index.css'
import FeatherIcon from 'feather-icons-react'

const Register = (props) => {
  return (
    <div className={'container ' + styles.formContainer}>
      <div className={'row py-5 ' + styles.w_full}>
        <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 m-auto'>
          <div className={`p-sm-5 py-5 px-4 ${styles.formLoginRegister} ${props.formClassName}`}>
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
                  <input
                    type='text'
                    className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                    placeholder={`${props.fullNamePlaceholder}`}
                  />
                  :
                  <input
                    type='text'
                    className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                    placeholder='Prénom & Nom'
                  />
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
                    <input
                      type='text'
                      className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                      placeholder={`${props.firstNamePlaceholder}`}
                    />
                    :
                    <input
                      type='text'
                      className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                      placeholder='Prénom'
                    />
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
                    <input
                      type='text'
                      className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                      placeholder={`${props.lastNamePlaceholder}`}
                    />
                    :
                    <input
                      type='text'
                      className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                      placeholder='Nom'
                    />
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
                  <input
                    type='number'
                    className={`form-control ${styles.formLoginRegisterInput} ${styles.numberInputCustom} ${props.inputFormClassName}`}
                    placeholder={`${props.phonePlaceholder}`}
                  />
                  :
                  <input
                    type='number'
                    className={`form-control ${styles.formLoginRegisterInput} ${styles.numberInputCustom} ${props.inputFormClassName}`}
                    placeholder='Téléphone'
                  />
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
                <input
                  type='email'
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder={`${props.mailPlaceholder}`}
                />
                :
                <input
                  type='email'
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder='Adresse mail'
                />
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
                <input
                  type='password'
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder={`${props.passwordPlaceholder}`}
                />
                :
                <input
                  type='password'
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder='Mot de passe'
                />
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
                <input
                  type='password'
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder={`${props.confirmPasswordPlaceholder}`}
                />
                :
                <input
                  type='password'
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder='Confirmer mot de passe'
                />
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
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register
