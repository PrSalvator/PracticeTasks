import { Popover } from "@mui/material"
import { Actions } from "../../../../shared/ui/Actions/Actions";
import { forwardRef, useImperativeHandle, useState } from "react";
import { ListeningRef } from "../../../../shared/model/types";
import { IAchorOrigin } from "../../model/types";

interface Props{
    element: HTMLElement;
    anchorOrigin: IAchorOrigin;
}

export const OpenActions = forwardRef<ListeningRef, Props>((props, ref) => {

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    useImperativeHandle(ref, () => ({
		openActions: () => {
            setAnchorEl(props.element);
        }
	}));

    const handleClose = () => {
        setAnchorEl(null);
      };
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={props.anchorOrigin}
                >
                    <Actions handleDelete={() => {}} handleUpdate={() => {}}/>
            </Popover>
        </div>
    )
})  