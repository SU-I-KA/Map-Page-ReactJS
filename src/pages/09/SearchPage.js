import React, { lazy, Suspense } from 'react'
// import MapSearchWrap from '../../components/09/MapSearchWrap/MapSearchWrap'
import Loading from '../../components/09/Loading/Loading'

const MapSearchWrap = lazy(() =>
  import('../../components/09/MapSearchWrap/MapSearchWrap')
)

export default function SearchPage() {
  return (
    <Suspense fallback={<Loading />}>
      <MapSearchWrap />
    </Suspense>
  )
}
