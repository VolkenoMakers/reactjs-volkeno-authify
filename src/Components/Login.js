import React from 'react'
import styles from '../styles.module.css'
import FeatherIcon from 'feather-icons-react'

const Login = () => {
  return (
    <div className={'container ' + styles.formContainer}>
      <div className={'row ' + styles.w_full}>
        <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 m-auto'>
          <div className={'p-sm-5 py-5 px-4 ' + styles.formLoginRegister}>
            <span className={'mb-sm-5 mb-3 ' + styles.formLoginRegisterTitle}>
              Connectez-vous
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
            <div className='form-group position-relative'>
              <span className={styles.formLoginRegisterPrepend}>
                <FeatherIcon icon='lock' />
              </span>
              <input
                type='password'
                className={'form-control ' + styles.formLoginRegisterInput}
                placeholder='Mot de passe'
              />
            </div>
            <a className={styles.formLoginRegisterForgotPasswordLink} href='#'>
              Mot de passe oublié ?
            </a>

            <button
              className={'mt-5 mb-4 ' + styles.formLoginRegisterbtnPrimary}
            >
              Connexion
            </button>
            <p className={' ' + styles.formLoginRegisterFooter}>
              Pas encore de compte ?
              <a
                href='#'
                className={'ml-1 ' + styles.formLoginRegisterFooterLink}
              >
                s’inscrire
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
