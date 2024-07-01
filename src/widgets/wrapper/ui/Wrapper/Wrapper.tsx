import Icon from "@mui/material/Icon"
import styles from "./styles.module.css"
import { MoreVertButton } from "../../../../features/moreVertButton";

interface Props{
    name: string,
    image: string
}

export const Wrapper = ({name, image}:Props) => {
    return (
        <div className={`d-flex align-items-center p-2 border border-primary rounded-2 ${styles.wrapper}`}>
            <Icon sx={{fontSize: 42}} color="primary">{image}</Icon>
            <h5 className="mb-0 ms-2">{name}</h5>
            <div className="ms-auto">
                <MoreVertButton handleDelete={() => {}} handleUpdate={() => {}}/>
            </div>
        </div>
    )

}