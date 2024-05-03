import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [displayName, setDisplayName] = useState ("")
  const [email, setEmail ] = useState ("")
  const [password, setPassword] = useState ("")
  const [confirmPassword, setConfirmPassword] = useState ("")
  const [cpf, setCpf] =useState ("")
  const [error, setError] = useState ("")
  const [ isLogged, setIsLogged ] = useState(true)
  //const [ showLoginAlert, setShowLoginAlert ] = useState(<div></div>)


  // redirecionamento de pagina
  const navigate = useNavigate()


  // validação de email
  const checkEmail = () => {
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailPattern.test(email)
  }


  // validação de senha 
  const checkPassword = () => {
    const hasMinLength = password.length >= 6
    //const hasUpperCase = /[A-Z]/.test(password)
    //const hasLowerCase = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    //const hasSymbol = /[~!@#$%^&*-_+=|<>?/:;{}()[\]]/g.test(password)

    const isValidPassword = hasMinLength && hasNumber
    // Feedback claro e informativo com base nos resultados da validação
  if (isValidPassword) {
    return true;  // Senha válida
  }
  
}

// funcção para só aceita numeros no input do cpf
const handleCpfChange = (e) => {
  const inputCpf = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
  setCpf(inputCpf);
}

// validação de cpf
const checkCpf = () => {
  const limpaCpf = cpf.replace(/\D/g, '')

  if(limpaCpf.length !== 11){
    return false
  }
  if(/^(\d)\1{10}$/.test(limpaCpf)) {
    return false
  }
  
  return true
}

const handleSubmit = async (e) => {
  e.preventDefault();

  let formIsValid = true
  setError("")

  // objeto para guarda as informações das variáveis
  const user = {
    email,
    displayName,
    password,
    cpf
  }
  if (!checkEmail() ) {
      setError("email invalido")
      formIsValid = false   
  }
  if (!checkPassword() ) {
    setError("Senha  invalida")
    formIsValid = false 
  }
  if (!checkCpf() ) {
    setError("CPF invalido")
    formIsValid = false 
  }
  if (password !== confirmPassword ) {
    setError("senha diferentes")
    formIsValid = false 
  }
  if (displayName === ''){
    setError("digite seu nome ")
    formIsValid = false
  }
  if (formIsValid) {
    setIsLogged(true);
    console.log("Usuário logado:", user)
  } 

  if (formIsValid) { 
    try {
      const response = await fetch('/usarios', {
        method:'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário')
      }

      const data = await response.json()
      console.log('Usuário cadastrado:', data)
      setIsLogged(true)
  } catch (error) {
      setError("Erro ao cadastrar usuário")
  }
  }else {
    setIsLogged(false)
  }

  console.log("isLogged:", isLogged)
  return navigate("/")
}
  return (
    <div className="min-h-screen bg-white flex">
      <div className="hidden lg:block relative w-0 flex-1 bg-gray-900">
        <div className="flex h-full justify-center items-center">
        <img src="logo.svg" alt=""/>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div>
            <img src="logo.svg" alt="" className="lg:hidden h-20 w-auto"/>
            <h2 className="mt-6 text-3x1 font-semibold text-red-600">Crie sua conta</h2>
            <p className='mt-w text-sm text-gray-600 max-w'>Já possui Cadastro? 
             <a href="Login" className='font-medium text-blue-600'>Entre aqui!</a>
            </p>
          </div>
          <div className="mt-6">
            <form 
            onSubmit={handleSubmit}
            >
            {/*<div className="text-red-500 font-bold" style={{ display: isLogged ? 'none' : 'block' }}>E-MAIL OR PASSWORD WRONG.</div>*/}
              <div className="mb-4">
                <input 
                type="text" 
                placeholder="Nome " 
                className="apparance-none block w-full py-1 px-2 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 roudend focus: outline-none "
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                />
                {/*<input 
                type="text" 
                placeholder="Sobrenome" 
                className="apparance-none block w-full py-1 px-2 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 roudend focus: outline-none " />*/}
              </div>
              <div className="mt-5">
                <input 
                type="email" 
                placeholder="Email" 
                className="apparance-none block w-full py-1 px-2 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 roudend focus: outline-none "
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  checkEmail()
                }}
                />
              </div>
              <div className="mt-5">
                <input 
                type="text"
                placeholder="CPF"
                className="appearance-none block w-full py-1 px-2 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                required
                value={cpf}
                onChange={handleCpfChange}
                />
              </div>
              <div className="mt-5">
                <input 
                type="password" 
                placeholder="Senha"
                className="apparance-none block w-full py-1 px-2 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 roudend focus: outline-none "
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  checkPassword()
                }}
                />
              </div>
              <div className="mt-5">
                <input 
                type="password"
                placeholder="Corfime a senha"
                className="apparance-none block w-full py-1 px-2 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 roudend focus: outline-none"
                required
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                  checkPassword()
                }}
                />
              </div>
              <div className="mt-5">
                <button className=" inline-block w-full py-3 px-5 lenading-none text-white bg-red-600 hover:bg-red-900 font-semibold rounded shadow"> Cadastre-se </button>
                {error && <p className="text-3x1 font-semibold text-red-600">{error}</p>}
              </div>
              {/*<div className="fixed bottom-0 left-0 bg-green-500 text-white login-alert-large rounded font-bold">
              {showLoginAlert}
              </div>*/}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register