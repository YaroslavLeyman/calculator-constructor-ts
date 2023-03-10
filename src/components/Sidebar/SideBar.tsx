import classNames from "classnames";

import {useAppSelector} from "../../hooks/useAppSelector";
import {useDragDrop} from "../../hooks/useDragDrop";
import {ItemNameType, items} from "../../constants/items";

import styles from './Sidebar.module.css'


export const Sidebar = () => {

    const itemsOnCanvas = useAppSelector(state => state.app.itemsOnCanvas)
    const {dragStartHandler} = useDragDrop()

    const needDisable = (name: ItemNameType) => itemsOnCanvas.includes(name)

    const needDrag = (name: ItemNameType) => !itemsOnCanvas.includes(name)

    const classesForItem = (name: ItemNameType) => classNames(styles.itemContainer, {
        [styles.disabledComponent]: needDisable(name),
        [styles.moveStyle]: needDrag(name)
    })

    return (
        <div className={styles.sidebar}>
            {items
                .map((item) => {
                    const {Component, name, id} = item
                    return (
                        <div
                            key={id}
                            className={classesForItem(name)}
                            draggable={needDrag(name)}
                            onDragStart={() => dragStartHandler(name)}
                        >
                        <Component inputValue={'0'} inactive/>
                        </div>
                    )
                })
            }
        </div>
    )

}