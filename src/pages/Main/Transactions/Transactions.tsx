import { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { setTitle } from '../../../utils/index'
import { appStore } from '../../../stores/appStore'

const Transactions: FC = () => {

  setTitle('Transactions')
  const [appState, setAppState] = useRecoilState(appStore)
  
  useEffect(() => {
    setAppState({...appState, navTitle: `Transactions`})
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Transactions