import React from 'react'
import styles from '../../index.css'
import FeatherIcon from 'feather-icons-react'

const RequestResetPassword = () => {
  return (
    <div className={'container ' + styles.formContainer}>
      <div className={'row ' + styles.w_full}>
        <div className='col-xl-6 col-lg-7 col-md-9 col-sm-11 m-auto'>
          <div className={'p-sm-5 py-5 px-4 ' + styles.formLoginRegister}>
            <span className={'mb-5 ' + styles.formLoginRegisterTitle +" "+  styles.formLoginRegisterTitleRP  }>
              Modifier votre mot de passe
            </span>
            <div className='form-group position-relative'>
              <span className={styles.formLoginRegisterPrepend}>
                <FeatherIcon icon='mail' />
              </span>
              <input
                type='email'
                className={'form-control ' + styles.formLoginRegisterInput}
                placeholder='Adresse mail'
              />
            </div>

            <button
              className={'mt-3 mb-4 ' + styles.formLoginRegisterbtnPrimary}
            >
              Restaurer
            </button>
            <p className={' ' + styles.formLoginRegisterFooter}>
              
              <a
                href='#'
                className={'ml-1 ' + styles.formLoginRegisterFooterLink}
              >
                Se connecter
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RequestResetPassword
