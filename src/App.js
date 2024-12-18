import './App.css';

import Title from './Title'

function App() {

  const text = 'whatever'

  return(
    <>
    <Title text={text}/>
      <Title text={'Hello Milo'}/>
      <div>
      <p className={'text'}>Hello Milo</p>
    </div>
      </>
  )

}


export default App;