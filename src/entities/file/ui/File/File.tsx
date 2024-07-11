import { DOMAttributes } from "react";
import { IFile } from "../../model/types";
import { Wrapper } from "../../../../shared/ui/Wrapper/Wrapper";

interface Props extends DOMAttributes<HTMLDivElement>{
    file: IFile;
    isSelected: boolean;
}

export const File = ({onClick, file, isSelected}: Props) => {
    return (
        <div>
            <Wrapper isSelected={isSelected} name={file.name} onClick={onClick} type="file"/>
        </div>

    )
}