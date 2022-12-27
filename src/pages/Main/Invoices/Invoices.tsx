import { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { setTitle } from '../../../utils/index'
import { appStore } from '../../../stores'

const Invoices: FC = () => {

  setTitle('Invoices')
  const [appState, setAppState] = useRecoilState(appStore)

  useEffect(() => {
    setAppState({...appState, navTitle: `Invoices`})
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Invoices