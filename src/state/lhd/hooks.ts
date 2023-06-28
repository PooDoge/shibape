import { useCallback, useEffect } from 'react'
import { shallowEqual } from 'react-redux'
import { useAppDispatch } from '../hooks'
// import { fetchFullProfile, fetchInitialProfiles, fetchProfiles, fetchProfilesQuery } from './actions'
import { fetchFullProfile } from './actions'
import { ProfilesResponse, SimpleTokenProfile, TokenProfile } from './types'
import { AppState } from '../index'
import { addFullProfile, addSimpleProfiles, setIsLhdAuth } from './reducer'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

// export const useOnSearchProfiles = () => {
//   console.log('SEARCH CALLED')
//   // const dispatch = useAppDispatch()
//   // return useCallback(
//   //   async (queryString: string): Promise<boolean> => {
//   //     try {
//   //       const listData: SimpleTokenProfile[] = await fetchProfiles(queryString)
//   //       dispatch(addSimpleProfiles(listData))
//   //       return listData.length === 0 //returns boolean representing if the query returned more than 1 result useful to show error when nothing is found
//   //     } catch (e) {
//   //       console.error(e)
//   //       return false
//   //     }
//   //   },
//   //   [dispatch],
//   // )
// }
//
// export const useOnFilterProfiles = () => {
//   console.log('FILTER CALLED CALLED')
//
//   // const dispatch = useAppDispatch()
//   // return useCallback(
//   //   async (queryString: string): Promise<boolean> => {
//   //     try {
//   //       const listData: SimpleTokenProfile[] = await fetchProfiles(undefined, queryString)
//   //       dispatch(addSimpleProfiles(listData))
//   //       return listData.length === 0 //returns boolean representing if the query returned more than 1 result useful to show error when nothing is found
//   //     } catch (e) {
//   //       console.error(e)
//   //       return false
//   //     }
//   //   },
//   //   [dispatch],
//   // )
// }

export const useFetchProfile = () => {
  const dispatch = useAppDispatch()
  const fullProfile = useSelector((state: AppState) => state?.lhd?.fullProfile)

  return useCallback(
    async (chainID?: string | string[] | undefined, address?: string | string[] | undefined) => {
      const exists = fullProfile?.addressMapping?.tokenAddresses.find(
        (tokenAddress) => tokenAddress.address === address && tokenAddress.chainId === chainID,
      )
      if (!exists) {
        try {
          dispatch(addFullProfile(null))
          const fullProfile: TokenProfile = await fetchFullProfile(`${chainID}/${address}`)
          if (fullProfile) {
            dispatch(addFullProfile(fullProfile))
          }
        } catch (e) {}
      }
    },
    [dispatch, fullProfile],
  )
}

export const useSimpleProfiles = (): ProfilesResponse => {
  return useSelector((state: AppState) => state.lhd.simpleProfiles)
}

export const useFullProfile = () => {
  return useSelector((state: AppState) => state.lhd.fullProfile)
}

export const useLHDFilterValues = () => {
  return useSelector((state: AppState) => {
    return state.lhd.queryState
  })
}

export const useSetLhdAuth = () => {
  const dispatch = useAppDispatch()
  const setLhdAuth = (isAuth: boolean): void => {
    localStorage.setItem('isLhdAuth', JSON.stringify(isAuth))
    dispatch(setIsLhdAuth(isAuth))
  }
  return { setLhdAuth }
}

export const useGetIsLhdAuth = () => {
  const { query } = useRouter()
  const { setLhdAuth } = useSetLhdAuth()
  const isWhitelisted = query?.whitelist === 'true'

  const getIsLhdAuth = (): { isAuth: boolean } => {
    const isLocalLdhAuth = localStorage.getItem('isLhdAuth') === 'true'
    if (isLocalLdhAuth || isWhitelisted) {
      setLhdAuth(true)
      return { isAuth: true }
    }
    setLhdAuth(false)
    return { isAuth: false }
  }
  return { getIsLhdAuth }
}
