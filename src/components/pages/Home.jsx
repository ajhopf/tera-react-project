import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo.svg'

export default function Home() {
  const navigate = useNavigate()
  const [users, setUsers] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState('')

  console.log(users)
  console.log('currentUser', currentUser)

  //o segundo parametro do useEffect é necessário para que ele realize a função apenas uma vez, se não irá ficar repetindo
  React.useEffect(()=> {
    const usersEndpoint = 'https://62c4e487abea8c085a7e022a.mockapi.io/users/'

    fetch(usersEndpoint)
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])

  const handleUserChange = e => {
    setCurrentUser(e.target.value)
  }

  const handleConfirmClick = e => {
    navigate(`./users/${currentUser}`)
  }

  //render
  return (
  <div className="home center">
    <div className="home__logo">
      <img src={logo} className="responsive" alt="" />
    </div>
    <select onChange={handleUserChange} className="home__select-users">
      {/* sort() está sendo utilizado para ordenar alfabeticamente os usuarios, comparando o fn(first name) do usuário a com o do usuário b*/}
      <option value=''>Selecionar usuário</option>
      {users.sort((a,b) => a.fn.localeCompare(b.fn)).map(user => (
      <option value={user.id} key={user.id}>{user.fn} {user.ln}</option>
      ))}
    </select>
    {currentUser && (<button onClick={handleConfirmClick} className="button-primary">Entrar</button>)}
  </div>
  )
}
