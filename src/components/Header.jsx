import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing money bag." />
      <h1>INVESTMENT_CALCULATOR</h1>
    </header>
  );
}
