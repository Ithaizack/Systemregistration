import '../../App.css'
function Login(){
    return (
      <div className="App">
        <div className="Back">
        <div className="DivExit">
          <a href="/"><svg id="returnsvg" height="2em" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Back</title><path d="M352,170.667H94.17l70.249-70.248a21.334,21.334,0,1,0-30.171-30.171L27.581,176.915a21.336,21.336,0,0,0,0,30.171L134.248,313.752a21.334,21.334,0,1,0,30.171-30.171L94.17,213.333H352a96,96,0,0,1,0,192H128A21.333,21.333,0,1,0,128,448H352c76.461,0,138.667-62.205,138.667-138.667S428.461,170.667,352,170.667Z"/></svg></a>
        </div>
        <div className="Encapsulamento">
            <p class="Icon-Login">🦝</p>
            <div className="Login">
              <div>
                <div className="diferent">
                  <svg id="startsvg" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/></svg>
                  <input placeholder="Senha" id="Email" type="email" />
                </div>
              </div>
              <div>
                <div className="diferent">
                  <svg id="startsvg" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Lock Closed</title><path d="M336 208v-95a80 80 0 00-160 0v95" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="96" y="208" width="320" height="272" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                  <input placeholder="E-mail" id="Senha" type="password" />
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