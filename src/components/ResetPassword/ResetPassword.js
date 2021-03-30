import React from 'react'
import styles from '../../index.css'
import FeatherIcon from 'feather-icons-react'

const ResetPassword = (props) => {
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
                    <input
                      type='password'
                      className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                      placeholder={`${props.resetCodePlaceholder}`}
                    />
                    :
                    <input
                      type='password'
                      className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                      placeholder='Saisir le code'
                    />
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
                    <input
                      type='password'
                      className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                      placeholder={`${props.passwordPlaceholder}`}
                    />
                    :
                    <input
                      type='password'
                      className={`form-control ${styles.formLoginRegisterInput} ${props.inputFormClassName}`}
                      placeholder='Saisir votre nouveau mot de passe'
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
                      placeholder='Confirmer votre mot de passe'
                    />
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
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResetPassword
