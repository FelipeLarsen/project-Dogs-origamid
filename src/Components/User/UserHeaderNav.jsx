import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg'
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg'
import { ReactComponent as Sair } from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null)
  const { userLogout } = React.useContext(UserContext)
  const navigate = useNavigate();

  function handleLogout() {
    userLogout()
    navigate('/login')
  }

  return (
    <nav className={styles.nav}>
      <NavLink to='/my_account' end>
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>

      <NavLink to='/my_account/statistics'>
        <Estatisticas />
        {mobile && 'Estatísticas'}
      </NavLink>

      <NavLink to='/my_account/post'>
        <AdicionarFoto />
        {mobile && 'Postar Fotos'}
      </NavLink>

      <button onClick={handleLogout}>
        {' '}
        <Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
  )
}

export default UserHeaderNav