import React from 'react'
import styles from '../../index.css'
import FeatherIcon from 'feather-icons-react'

const ResetPassword = () => {
  return (
    <div className={'container ' + styles.formContainer}>
      <div className={'row ' + styles.w_full}>
        <div className='col-xl-6 col-lg-7 col-md-9 col-sm-11 m-auto'>
          <div className={'p-sm-5 py-5 px-4 ' + styles.formLoginRegister}>
            <span className={'mb-sm-5 mb-3 ' + styles.formLoginRegisterTitle}>
              Nouveau mot de passe
            </span>
            <div className='form-group position-relative'>
              <span className={styles.formLoginRegisterPrepend}>
                <FeatherIcon icon='mail' />
              </span>
              <input
                type='email'
                className={'form-control ' + styles.formLoginRegisterInput}
                placeholder='Saisir votre nouveau mot de passe'
              />
            </div>
            <div className='form-group position-relative'>
              <span className={styles.formLoginRegisterPrepend}>
                <FeatherIcon icon='mail' />
              </span>
              <input
                type='email'
                className={'form-control ' + styles.formLoginRegisterInput}
                placeholder='Confirmer votre mot de passe'
              />
            </div>

            <button
              className={'mt-5 mb-4 ' + styles.formLoginRegisterbtnPrimary}
            >
              Terminer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResetPassword
