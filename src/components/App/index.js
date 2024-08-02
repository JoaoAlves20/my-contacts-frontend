import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../../assets/styles/global'
import { stylesDefault } from '../../assets/styles/themes/default'

import { Container } from './styles'
import Header from '../Header'

export default function App() {
  return (
    <ThemeProvider theme={stylesDefault}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  )
}