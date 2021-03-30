import React from 'react'
import styles from '../../index.css'
import FeatherIcon from 'feather-icons-react'

const Login = (props) => {
  return (
    <div className={'container ' + styles.formContainer}>
      <div className={'row ' + styles.w_full}>
        <div className={`col-xl-5 col-lg-6 col-md-8 col-sm-10 m-auto ${props.formContainerClassName}`}>
          <div className={`p-sm-5 py-5 px-4 ${styles.formLoginRegister} ${props.formClassName}`}>
            {props.logoFormSrc ?
              <span className={`${styles.logo_form} ${props.logoFormClassName} `} style={{ background: `url(${props.logoFormSrc})` }}></span>
              :
              <span className={`${styles.logo_form} ${props.logoFormClassName} `} style={{ background: `url(http://via.placeholder.com/200/C4C9C7/FFFFFF)` }}></span>
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
                {props.iconiconInputPwdPlaceholder ?
                  <FeatherIcon className={`${props.iconInputFormClassName}`} icon={`${props.iconInputMailPlaceholder}`} />
                  :
                  <FeatherIcon className={`${props.iconInputFormClassName}`} icon='mail' />
                }
              </span>
              {props.inputMailPlaceholder ?
                <input
                  type='email'
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder={`${props.inputMailPlaceholder}`}
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
                {props.iconInputPwdPlaceholder ?
                  <FeatherIcon className={`${props.iconInputFormClassName}`} icon={`${props.iconInputPwdPlaceholder}`} />
                  :
                  <FeatherIcon className={`${props.iconInputFormClassName}`} icon='lock' />
                }
              </span>
              {props.iconInputPwdPlaceholder ?
                <input
                  type='password'
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder={`${props.iconInputPwdPlaceholder}`}
                />
                :
                <input
                  type='password'
                  className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                  placeholder='Adresse mail'
                />
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
              <button
                className={`mt-5 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
              > 
                {props.btnPrimaryTextLabel}
              </button>
              :
              <button
                className={`mt-5 mb-4 ${styles.formLoginRegisterbtnPrimary} ${props.btnPrimaryFormClassName}`}
              > 
                Connexion
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
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
