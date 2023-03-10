import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

import styles from "./DataCanvas.module.css";


export const DataCanvas = () => {

    return(
        <div className={styles.containerForData}>
            <AddPhotoAlternateOutlinedIcon/>
            <div className={styles.firstTextBlock}>Перетащите сюда</div>
            <div className={styles.secondTextBlock}>
                <div>любой контент</div>
                <div>из левой панели</div>
            </div>
        </div>
    )

}