import { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { setTitle } from '../../../utils/index'
import { appStore } from '../../../stores'

const Invoices: FC = () => {

  setTitle('Invoices')
  const [app, setApp] = useRecoilState(appStore)

  useEffect(() => {
    setApp({...app, navTitle: `Invoices`})
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Invoices