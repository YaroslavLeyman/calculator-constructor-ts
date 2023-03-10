import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';

import {SwitcherBtn} from "../SwitcherBtn/SwitcherBtn";
import {changeMode, ModeType} from "../../../constants/appFragment";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {appModes} from "../../../constants/appModes";

import styles from './SwitcherView.module.css'


export const SwitcherView = () => {
  const dispatch = useAppDispatch()
  const mode = useAppSelector(state => state.app.mode)

  const clickHandler = (mode: ModeType) => dispatch(changeMode(mode))
  const itemsOnCanvas = useAppSelector(state => state.app.itemsOnCanvas)

  return (
    <div className={styles.switcherBox}>
      {appModes.map((item, i) => {
        return <SwitcherBtn
          key={i}
          itemsOnCanvas={itemsOnCanvas.length === 0 }
          clickHandler={() => clickHandler(item)}
          active={mode === item}
          title={item === 'runtime' ? 'Runtime' : 'Constructor'}>
          {item === 'runtime'
            ? <VisibilityOutlinedIcon color={mode === item ? 'info' : 'inherit'} fontSize={'small'}/>
            : <CodeOutlinedIcon color={mode === item ? 'info' : 'inherit'} fontSize={'small'}/>}
        </SwitcherBtn>
      })}
    </div>
  )
}