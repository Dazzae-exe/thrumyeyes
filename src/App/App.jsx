import { RecoilRoot } from 'recoil'
import '../assets/styles/RootStyles/_App.scss'
import UIApp from './UIApp'

function App() {

  return (
    <RecoilRoot>
      <UIApp />
    </RecoilRoot>
  )
}

export default App
