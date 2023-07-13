import Dashboard from "./Dashboard/Dashboard"
import Transactions from "./Transactions/Transactions"
import Invoices from "./Invoices/Invoices"
import Invoice from "./Invoice/Invoice"
import Wallets from "./Wallets/Wallets"
import Settings from "./Settings/Settings"

interface IPage {
  id: number,
  path: string,
  element: React.FC
}

export const pages: IPage[] = [
  { id: 0, path: '', element: Dashboard },
  { id: 1, path: 'transactions', element: Transactions },
  { id: 2, path: 'invoices', element: Invoices },
  { id: 3, path: 'invoices/:id', element: Invoice },
  { id: 4, path: 'wallets', element: Wallets },
  { id: 5, path: 'settings', element: Settings }
]