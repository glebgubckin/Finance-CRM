import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import { FiSearch } from 'react-icons/fi'
import styles from './search.module.scss'

interface ISearch {
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
  width: number,
  placeholder?: string
}

const Search: FC<ISearch> = ({value, setValue, width, placeholder = ''}) => {
  return (
    <div className={styles.wrapper}>
      <FiSearch size={32} color="1B212D" />
      <input
        style={{width}}
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} 
      />
    </div>
  )
}

export default Search