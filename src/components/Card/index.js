import PropTypes from 'prop-types';

import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'

import { Container } from './styles'

export default function Card({
  name, instagram, email, phone
}) {
  return (
    <Container>
      <div className="info">
        <div className="contact-name">
          <strong>{name}</strong>
          <small>{instagram}</small>
        </div>
        <span>{email}</span>
        <span>{phone}</span>
      </div>

      <div className="actions">
        <a href="/">
          <img src={edit} alt="Edit" />
        </a>
        <button>
          <img src={trash} alt="Trash" />
        </button>
      </div>
    </Container>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
}