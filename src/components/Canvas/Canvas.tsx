import classNames from "classnames";

import {DataCanvas} from "./DataCanvas/DataCanvas";
import {removeItem} from "../../constants/appFragment";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useDragDrop} from "../../hooks/useDragDrop";
import {useCalculator} from "../../hooks/useCalculator";
import {ItemNameType} from "../../constants/items";

import styles from './Canvas.module.css'


export const Canvas = () => {
    
    const dispatch = useAppDispatch()
    const itemsOnCanvas = useAppSelector(state => state.app.itemsOnCanvas)
    const mode = useAppSelector(state => state.app.mode)
    const {setValue, inputValue, saveOperation, setResult} = useCalculator()
    const {
        dragLeaveHandler,
        dragStartHandler,
        dragOverHandler,
        dropHandler,
        dropCanvasHandler,
        dragOverCanvasHandler,
        dragLeaveCanvasHandler,
        myItems
    } = useDragDrop()

    const constructionMode = mode === 'constructor'
    const canvasClasses = classNames(styles.emptyCanvas, {
        [styles.canvasWithData]: itemsOnCanvas.length !== 0 || mode === 'runtime',
    })
    const classesForItem = (name: ItemNameType) => classNames(styles.itemContainer, {
        [styles.moveStyle]: name !== 'display' && constructionMode
    })

    const doubleClickHandler = (name: ItemNameType) => {
        if (constructionMode) dispatch(removeItem(name))
    }

    return (
        <div className={canvasClasses}
            onDragOver={e => dragOverCanvasHandler(e)}
            onDragLeave={e => dragLeaveCanvasHandler(e)}
            onDrop={e => dropCanvasHandler(e)}
        >
            {constructionMode && itemsOnCanvas.length === 0 && <DataCanvas/>}
            {myItems
                .filter(i => itemsOnCanvas.includes(i.name))
                .map(item => {
                    const {Component, id, name} = item
                    return (
                        <div
                            key={id}
                            onDragStart={() => dragStartHandler(name)}
                            onDragOver={e => dragOverHandler(e, item)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragEnd={e => dragLeaveHandler(e)}
                            onDrop={e => dropHandler(e, item)}
                            onDoubleClick={() => doubleClickHandler(name)}
                            className={classesForItem(name)}
                            draggable={name !== 'display' && constructionMode}
                        >
                            <Component
                                inactive={constructionMode}
                                saveOperation={saveOperation}
                                inputValue={inputValue}
                                setResult={setResult}
                                setValue={setValue}
                            />
                        </div>
                    )
                }
            )}
        </div>
    )

}