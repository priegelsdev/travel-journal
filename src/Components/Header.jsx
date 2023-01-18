import Logo from '../assets/logo.png'

export default function Header() {
  return (
    <header>
      <img src={Logo} />
      <h4 className="page-title">my travel journal.</h4>
    </header>
  )
}