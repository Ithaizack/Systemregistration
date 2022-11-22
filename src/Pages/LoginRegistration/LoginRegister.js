import '../../App.css'
function Login(){
    return (
      <div className="App">
        <div className="Back">
        <div className="Front">

        </div>
        <div className="Encapsulamento">
            <p class="Icon-Login">🦝</p>
            <div className="Login">
              <div>
                <label for="Email">Email</label>
                <div className="diferent">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/></svg>
                  <input id="Email" type="email" />
                </div>
              </div>
              <div>
                <label for="Senha">Senha</label>
                <div className="diferent">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Lock Closed</title><path d="M336 208v-95a80 80 0 00-160 0v95" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="96" y="208" width="320" height="272" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                  <input id="Senha" type="text" />
                </div>
              </div>
              <button className='page-login-button' type="submit">Entra</button>
            </div>
          </div>
        </div>
      </div>
    )
};
export default Login