import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import theme from '../../theme'

export const ReactTooltipStyled = styled(ReactTooltip)`
  font-family: ${theme.fonts.jost};
  font-size: 13px;
`

export const Logo1 = styled.img`
   width: auto;
   height: 6vh;
   margin-bottom: 2vh;
   margin-right: 2vh;
`

export const Container = styled.div`
    width: 100vw;
    height: 8vh;
    display: flex;
    justify-content: right;
    bottom: 0;
    position: fixed;
`
