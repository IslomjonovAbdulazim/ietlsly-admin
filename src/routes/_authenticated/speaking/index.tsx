import { createFileRoute } from '@tanstack/react-router'
import Speaking from '@/features/speaking'

export const Route = createFileRoute('/_authenticated/speaking/')({
  component: () => <Speaking />,
})