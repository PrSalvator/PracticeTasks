import { useRef} from "react";
import { OpenActions } from "../../../../features/openActions";
import { Wrapper } from "../../../../shared/ui/Wrapper/Wrapper";
import { IFolder } from "../../model/types";
import { ListeningRef } from "../../../../shared/model/types";

interface Props{
    folder: IFolder;
}

export const Folder = ({folder}: Props) => {
    const ref = useRef<ListeningRef>(null);
    const element = useRef(null);

    function handleButtonClick(){
        ref.current?.openActions();
    }
    

    return(
        <div ref={element}>
            <Wrapper name={folder.name} type="folder" handleButtonClick={handleButtonClick}/>
            {element.current != null && (
                <OpenActions ref={ref} element={element.current} anchorOrigin={{vertical: 'center', horizontal: 'right'}}/>
            )}
        </div>

    )
}