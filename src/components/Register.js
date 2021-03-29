import React from 'react'
import styles from '../styles.module.css'
import FeatherIcon from 'feather-icons-react'

const Register = () => {
  return (
    <div className={'container ' + styles.formContainer}>
      <div className={'row py-5 ' + styles.w_full}>
        <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 m-auto'>
          <div className={'p-sm-5 py-5 px-4 ' + styles.formLoginRegister}>
            <span className={'mb-sm-5 mb-3 ' + styles.formLoginRegisterTitle}>
              Inscrivez-vous
            </span>
            <div className='form-group position-relative'>
              <span className={styles.formLoginRegisterPrepend}>
                <FeatherIcon icon='user' />
              </span>
              <input
                type='text'
                className={'form-control ' + styles.formLoginRegisterInput}
                placeholder='Prénom'
              />
            </div>
            <div className='form-group position-relative'>
              <span className={styles.formLoginRegisterPrepend}>
                <FeatherIcon icon='user' />
              </span>
              <input
                type='text'
                className={'form-control ' + styles.formLoginRegisterInput}
                placeholder='Nom'
              />
            </div>
            <div className='form-group position-relative'>
              <span className={styles.formLoginRegisterPrepend}>
                <FeatherIcon icon='user' />
              </span>
              <input
                type='text'
                className={'form-control ' + styles.formLoginRegisterInput}
                placeholder='Prénom & Nom'
              />
            </div>
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
            <div className='form-group position-relative'>
              <span className={styles.formLoginRegisterPrepend}>
                <FeatherIcon icon='lock' />
              </span>
              <input
                type='password'
                className={'form-control ' + styles.formLoginRegisterInput}
                placeholder='Confirmer mot de passe'
              />
            </div>
            

            <button
              className={'mt-5 mb-4 ' + styles.formLoginRegisterbtnPrimary}
            >
              Inscription
            </button>
            <p className={' ' + styles.formLoginRegisterFooter}>
              Déja inscrit?
              <a
                href='#'
                className={'ml-1 ' + styles.formLoginRegisterFooterLink}
              >
                se connecter
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register
