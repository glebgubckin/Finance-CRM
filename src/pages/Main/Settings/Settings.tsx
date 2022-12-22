import { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { setTitle } from '../../../utils/index'
import { appStore } from '../../../stores/appStore'

const Settings: FC = () => {

  setTitle('Settings')
  const [appState, setAppState] = useRecoilState(appStore)
  
  useEffect(() => {
    setAppState({...appState, navTitle: `Settings`})
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Settings