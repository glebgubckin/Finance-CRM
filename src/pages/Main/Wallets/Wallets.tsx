import { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { setTitle } from '../../../utils/index'
import { appStore } from '../../../stores/appStore'

const Wallets: FC = () => {

  setTitle('My Wallets')
  const [appState, setAppState] = useRecoilState(appStore)
  
  useEffect(() => {
    setAppState({...appState, navTitle: `My Wallets`})
  }, [])
  
  return (
    <div>
      
    </div>
  )
}

export default Wallets