import {FC, ReactNode, Dispatch, SetStateAction, HTMLAttributes, MouseEvent } from 'react'
import styles from './modal.module.scss'

interface IModal {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
  children: ReactNode | ReactNode[] | string
}

interface ITitle extends HTMLAttributes<HTMLParagraphElement> {
  title: string
}

const Modal: FC<IModal> = ({open, setOpen, children}) => {
  return (
    <>
      { open &&
        <div 
          className={styles.wrapper} 
          onClick={() => setOpen(false)}
        >
          <div className={styles.inner} onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      }
    </>
  )
}

export default Modal