import {Canvas} from "../Canvas/Canvas";
import {Sidebar} from "../Sidebar/SideBar";
import {SwitcherView} from "../Switcher/SwitcherView/SwitcherView";
import {useAppSelector} from "../../hooks/useAppSelector";

import styles from './App.module.css'


function App() {

  const mode = useAppSelector(state => state.app.mode)

  return (
    <div className={styles.app}>
      <div className={styles.mainContainer}>
        <SwitcherView/>
        <div className={styles.container}>
          {mode === 'constructor' && <Sidebar/>}
          <Canvas/>
        </div>
      </div>
    </div>
  )

}

export default App;
