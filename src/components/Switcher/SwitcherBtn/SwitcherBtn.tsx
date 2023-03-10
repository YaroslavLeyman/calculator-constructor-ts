import { ReactElement } from "react";
import classNames from "classnames";

import styles from "./SwitcherBtn.module.css";

type Props = {
    itemsOnCanvas: boolean;
    active: boolean;
    title: string;
    clickHandler: () => void;
    style?: {};
    children?: ReactElement;
};

export const SwitcherBtn = ({
    clickHandler,
    itemsOnCanvas,
    active,
    title,
    style,
    children,
}: Props) => {
    const buttonClasses = classNames(styles.button, {
        [styles.activeButton]: active,
    });

    return (
        <button
            disabled={itemsOnCanvas}
            onClick={clickHandler}
            className={buttonClasses}
            style={style}
        >
            {itemsOnCanvas && <span className={styles.tooltiptext}>Добавьте контент</span>}
            <div className={styles.buttonText}>
                {children}
                {title}
            </div>
        </button>
    );
};
