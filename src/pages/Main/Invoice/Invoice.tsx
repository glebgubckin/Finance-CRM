import { FC, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { setTitle } from '../../../utils/index'
import { appStore } from '../../../stores'
// import { useParams } from 'react-router-dom'

const Invoice: FC = () => {

  // const { id } = useParams()

  setTitle(`Invoice`)
  const [app, setApp] = useRecoilState(appStore)
  
  useEffect(() => {
    setApp({...app, navTitle: `Invoice`})
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Invoice