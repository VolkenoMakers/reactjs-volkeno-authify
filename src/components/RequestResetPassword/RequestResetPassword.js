import React from 'react'
import styles from '../../index.css'
import FeatherIcon from 'feather-icons-react'

const RequestResetPassword = (props) => {
  return (
    <div className={'container ' + styles.formContainer}>
      <div className={'row py-5 ' + styles.w_full}>
        <div className='col-xl-6 col-lg-7 col-md-9 col-sm-11 m-auto'>
          <div className={`p-sm-5 py-5 px-4 ${styles.formLoginRegister} ${props.formClassName}`}>
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
          </div>
        </div>
      </div>
    </div>
  )
}
export default RequestResetPassword
