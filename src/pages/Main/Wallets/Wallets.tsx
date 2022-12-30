import { FC, MouseEvent, useEffect, useState, Fragment, ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { toast, ToastContainer } from 'react-toastify'
import { setTitle } from '../../../utils/index'
import { appStore, walletStore } from '../../../stores'
import { payments, upcomingPayments } from './wallets.data'
import { FiArrowUp, FiArrowDown, FiPlus } from "react-icons/fi"
import Card from '../../../components/Card/Card'
import Payments from './components/Payments/Payments'
import Modal from '../../../components/Modal/Modal'
import { convertCardNumber } from '../../../utils/card.utils'
import styles from './wallets.module.scss'

interface INewCard {
  cardNumber: string,
  cardExpDate: string,
  type: 'mastercard' | 'visa'
}

const Wallets: FC = () => {

  setTitle('My Wallets')
  const balance = 5240
  const [app, setApp] = useRecoilState(appStore)
  const [wallets, setWallets] = useRecoilState(walletStore)

  const [modal, setModal] = useState(false)
  const [newCard, setNewCard] = useState<INewCard>({
    cardNumber: '',
    cardExpDate: '',
    type: 'mastercard'
  })

  const cardTypeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    switch(e.currentTarget.value) {
      case 'mastercard':
        setNewCard({...newCard, type: 'mastercard'})
        break
      case 'visa':
        setNewCard({...newCard, type: 'visa'})
        break
    }
  }

  const addCard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setWallets([...wallets, { number: convertCardNumber(newCard.cardNumber.toString()), expDate: newCard.cardExpDate, type: newCard.type }])
    setNewCard({
      cardNumber: '',
      cardExpDate: '',
      type: 'mastercard'
    })
    setModal(false)
    toast.success('Success! Card has been added', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
    })
  }
  
  useEffect(() => {
    setApp({...app, navTitle: `My Wallets`})
  }, [])
  
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wallets}>
          {
            wallets.map((w, index) => {
              return <Card
                      key={index}
                      personalNumbers={w.number}
                      expirationDate={w.expDate} 
                      type={w.type}
                      className={styles.card}
                    />
            })
          }
          <button className={styles.addCard} onClick={() => setModal(true)}>
            <FiPlus />
            Add New Card
          </button>
          <div className={styles.balance}>
            <div>
              <p className={styles.balance__title}>Your balance</p>
              <div className={styles.balance__subrow}>
                <p className={styles.balance__total}>${balance}</p>
                <p className={balance > 0 ? styles.balance__top : styles.balance__bottom}>
                  {
                    balance > 0 ? <FiArrowUp /> : <FiArrowDown />
                  }
                  12.54%
                </p>
              </div>
            </div>
            <div className={styles.balance__row}>
              <div className={styles.balance__column}>
                <p className={styles.balance__title}>Currency</p>
                <p className={styles.balance__subtitle}>USD / US Dollar</p>
              </div>
              <div className={styles.balance__column}>
                <p className={styles.balance__title}>Status</p>
                <p className={styles.balance__subtitle}>Active</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.payments}>
          <p className={styles.payments__title}>My Payments</p>
          <p className={styles.payments__subtitle}>Today</p>
          <div className={styles.payments__list}>
            <Payments payments={payments} />
          </div>
          <p className={styles.payments__title}>Upcoming Payments</p>
          <p className={styles.payments__subtitle}>Next month</p>
          <div className={styles.payments__list}>
            <Payments payments={upcomingPayments} />
          </div>
        </div>
        <Modal open={modal} setOpen={setModal}>
          <p className={styles.modal__title}>Add New Card</p>
          <div className={styles.modal__row}>
            <label className={styles.modal__label}>Card number</label>
            <input
              className={styles.modal__input}
              value={newCard.cardNumber} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setNewCard({...newCard, cardNumber: e.target.value})
              }} 
              type="text"
              maxLength={16} 
            />
          </div>
          <div className={styles.modal__row}>
            <label className={styles.modal__label}>Card expiration date</label>
            <input
              className={styles.modal__input}
              value={newCard.cardExpDate} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setNewCard({...newCard, cardExpDate: e.target.value})
              }} 
              type="text"
              maxLength={5}
            />
          </div>
          <div className={styles.modal__row}>
            <label className={styles.modal__label}>Type</label>
            <select className={styles.modal__select} onChange={(e: ChangeEvent<HTMLSelectElement>) => cardTypeHandler(e)}>
              <option value="mastercard">Mastercard</option>
              <option value="visa">Visa</option>
            </select>
          <button
            className={styles.modal__button}
            onClick={(e: MouseEvent<HTMLButtonElement>) => addCard(e)}
          >
              Add
            </button>
          </div>
        </Modal>
      </div>
      <ToastContainer />
    </>
  )
}

export default Wallets