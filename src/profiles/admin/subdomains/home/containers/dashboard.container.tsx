import { useRouter } from 'next/router'
import { DashboardInterface } from '../interfaces/dashboard.interface'

export const DashboardContainer = () => {
  const router = useRouter()
  const translate = useI18n()
  const state = useSelector()
  const atom = useAtom()

  return (
    <PublicRoute>
      <AppLayout>
        <DashboardInterface />
      </AppLayout>
    </PublicRoute>
  )
}