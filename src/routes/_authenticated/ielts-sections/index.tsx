import { createFileRoute } from '@tanstack/react-router'

import { IELTSSections } from '@/features/ielts-sections'

export const Route = createFileRoute('/_authenticated/ielts-sections/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <IELTSSections />
}