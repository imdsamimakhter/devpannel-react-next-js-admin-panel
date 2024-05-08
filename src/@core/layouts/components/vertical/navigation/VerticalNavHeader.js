// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = props => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
          <svg enable-background="new 0 0 2459.5 2079.2" viewBox="0 0 30 25.361" xmlns="http://www.w3.org/2000/svg" width="30" height="25.361"><path d="M26.56 18.732H16.425a0.72 0.72 0 0 0 -0.45 0.158l-7.553 6.005a0.261 0.261 0 0 0 0.165 0.467h18.089c1.788 0 3.396 -1.605 3.27 -3.536 -0.115 -1.761 -1.615 -3.093 -3.386 -3.093" fill="#00c9db"/><path d="m18.361 12.464 -0.003 -0.027a3.274 3.274 0 0 0 -1.255 -2.388L5.345 0.701a3.312 3.312 0 0 0 -4.64 0.562 3.287 3.287 0 0 0 0.558 4.624l8.525 6.777 -8.525 6.777C-0.171 20.563 -0.422 22.634 0.705 24.066s3.204 1.684 4.64 0.562l11.76 -9.35a3.274 3.274 0 0 0 1.255 -2.388l0.003 -0.027a4.286 4.286 0 0 0 -0.001 -0.399" fill="#0d55ff"/><path d="M30 22.046a3.317 3.317 0 0 1 -3.324 3.314c-1.834 0 -3.321 -1.485 -3.321 -3.314s1.487 -3.314 3.321 -3.314A3.317 3.317 0 0 1 30 22.046" fill="#7000f2"/></svg>
            <HeaderTitle variant='h6' sx={{ ml: 3 }}>
              {themeConfig.templateName}
            </HeaderTitle>
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
