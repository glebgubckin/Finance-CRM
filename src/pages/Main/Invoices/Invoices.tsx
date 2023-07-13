import { FC, useEffect, useState, useMemo } from 'react';
import { useRecoilState } from 'recoil'
import { setTitle } from '../../../utils/index'
import { appStore, invoiceStore } from '../../../stores'
import Search from '../../../components/Search/Search'
import { FiFileText, FiMoreHorizontal } from 'react-icons/fi'
import { RiBarChartLine } from 'react-icons/ri'
import styles from './invoices.module.scss'
import { convertMoney } from '../../../utils/convertMoney';
import Status from './components/Status/Status'

const Invoices: FC = () => {

  setTitle('Invoices')
  const [app, setApp] = useRecoilState(appStore)
  const [invoices, setInvoices] = useRecoilState(invoiceStore)

  const [dropdownId, setDropdownId] = useState("")
  
  const [search, setSearch] = useState("")
  
  const searchInvoices = useMemo(() => {
    if (search === "") {
      return invoices
    }
    return invoices.filter(t => {
      return (
        t.name.includes(search)
        || t.invoiceID.includes(search)
        || t.type.includes(search)
        || t.amount.toString().includes(search)
        || t.date.includes(search)
      )
    })
  }, [invoices, search])


  useEffect(() => {
    setApp({...app, navTitle: `Invoices`})
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <Search 
          value={search}
          setValue={setSearch}
          width={350}
          placeholder="Search invoices"
        />
        <div className={styles.navbar__row}>
          <button
            className={styles.create}
          >
            <FiFileText size={24} />
            Create Invoice
          </button>
          <button
            className={styles.filter}
          >
            <RiBarChartLine size={24} />
            Filter
          </button>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>NAME/CLIENT</th>
            <th>DATE</th>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            searchInvoices.map(i => {
              return (
                <tr key={i.invoiceID}>
                  <td>
                    <div className={styles.column}>
                      <p className={styles.table__title}>{i.name}</p>
                      <p className={styles.table__id}>Inv: {i.invoiceID}</p>
                    </div>
                  </td>
                  <td>
                    <p className={styles.table__date}>{i.date}</p>
                  </td>
                  <td>
                    <p className={styles.table__type}>{i.type}</p>
                  </td>
                  <td>
                    <p className={styles.table__amount}>
                      { convertMoney(i.amount) }
                    </p>
                  </td>
                  <td className={styles.table__status}>
                    <Status status={i.status} />
                  </td>
                  <td style={{position: 'relative'}}>
                    <button
                      className={styles.table__action}
                      onClick={() => setDropdownId(dropdownId === "" ? i.invoiceID : "")}
                    >
                      <FiMoreHorizontal size={24} color='29A073' />
                    </button>
                    <div className={dropdownId === i.invoiceID ? `${styles.table__actions} ${styles.table__actions__show}` : styles.table__actions}>
                      <button 
                        className={styles.table__toAction}
                        onClick={() => setInvoices(invoices.filter(invoice => i.invoiceID !== invoice.invoiceID))}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Invoices