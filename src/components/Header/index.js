/* eslint-disable jsx-a11y/alt-text */
import { Container } from "./styles"

import logo from '../../assets/images/logo.svg'

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="201" />
    </Container>
  )
}