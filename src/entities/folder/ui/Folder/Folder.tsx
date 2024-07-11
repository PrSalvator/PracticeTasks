import { DOMAttributes, useRef} from "react";
import { OpenActions } from "../../../../features/openActions";
import { Wrapper } from "../../../../shared/ui/Wrapper/Wrapper";
import { IFolder } from "../../model/types";
import { ListeningRef } from "../../../../shared/model/types";

interface Props extends DOMAttributes<HTMLDivElement>{
    folder: IFolder;
    isSelected?: boolean;
}

export const Folder = ({...props}: Props) => {
    const {onDoubleClick, isSelected, onDragEnd, onDragStart, onDragLeave, onDragOver, onDrop, folder, onClick} = props;
    const ref = useRef<ListeningRef>(null);
    const element = useRef(null);

    function handleButtonClick(){
        ref.current?.openActions();
    }

    return(
        <div ref={element}>
            <Wrapper 
            onDragEnd={onDragEnd} onDragLeave={onDragLeave} onDragStart={onDragStart} onDragOver={onDragOver}
            onDrop={onDrop} onDoubleClick={onDoubleClick}
            onClick={onClick} isSelected={isSelected ? true : false} 
            name={folder.name} type="folder" handleButtonClick={handleButtonClick}/>
            {element.current != null && (
                <OpenActions ref={ref} element={element.current} anchorOrigin={{vertical: 'center', horizontal: 'right'}}/>
            )}
        </div>

    )
}