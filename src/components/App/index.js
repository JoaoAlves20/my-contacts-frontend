import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from '../../assets/styles/global'
import { stylesDefault } from '../../assets/styles/themes/default'
import { Container } from './styles'

import Header from '../Header'
import Routes from '../../Routes'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={stylesDefault}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}