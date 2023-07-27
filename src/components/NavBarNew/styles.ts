import { ThemeUIStyleObject } from 'theme-ui'

export const NAV_HEIGHT = 60
export const NAV_MOBILE_DISPLAY = ['flex', 'flex', 'flex', 'flex', 'none']
export const NAV_DESKTOP_DISPLAY = ['none', 'none', 'none', 'none', 'flex']

export const styles: Record<
  | 'mainNavContainer'
  | 'bottomMobileNavContainer'
  | 'networkSelectContainer'
  | 'networkSelectorText'
  | 'accountLoggedInMainContainer'
  | 'hideOnMobile'
  | 'desktopNavOptionContainer',
  ThemeUIStyleObject
> = {
  mainNavContainer: {
    justifyContent: 'space-between',
    position: 'fixed',
    width: '100%',
    zIndex: 100,
    px: ['30px', '30px', '30px', '30px', '40px'],
    py: '16px',
  },
  bottomMobileNavContainer: {
    display: NAV_MOBILE_DISPLAY,
    justifyContent: 'space-between',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 100,
    px: '10px',
    py: '8px',
    bg: 'white1',
    height: '54px',
  },
  networkSelectContainer: {
    cursor: 'pointer',
    '&:hover': { bg: 'navbar' },
    height: '34px',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '7px',
    borderRadius: '6px',
    position: 'relative',
  },
  desktopNavOptionContainer: {
    cursor: 'pointer',
    '&:hover': { bg: 'navbar' },
    height: '34px',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '7px',
    borderRadius: '6px',
    position: 'relative',
  },
  networkSelectorText: {
    display: NAV_DESKTOP_DISPLAY,
    m: '0px 7.5px',
    lineHeight: '0px',
    fontSize: '14px',
  },
  accountLoggedInMainContainer: {
    cursor: 'pointer',
    '&:hover': { bg: 'navbar' },
    height: '34px',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '7px',
    borderRadius: '6px',
    position: 'relative',
  },
  hideOnMobile: {
    display: NAV_DESKTOP_DISPLAY,
  },
}
