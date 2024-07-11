import { Box, Button,  ButtonOwnProps,  CircularProgress } from "@mui/material"
import { CommonProps } from "@mui/material/OverridableComponent";
import React, { ReactNode } from "react";

interface Props extends CommonProps, React.ComponentPropsWithRef<'button'>{
    isLoading: boolean;
    variant: ButtonOwnProps["variant"];
}

export const SpinButton = ({isLoading, children, onClick, variant, className, type}: Props) => {
    function handleClick(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        if(onClick) onClick(e);
    }

    return(
    <Box sx={{position: 'relative'}} className={className}>
        <Button type={type} onClick={onClick} disabled={isLoading} sx={{width: '100%'}} variant={variant}>{children}</Button>
        {isLoading && (
            <CircularProgress color='primary' size={24} sx={{position: 'absolute', top: '50%', left: '50%', marginTop: '-12px', marginLeft: '-12px'}}></CircularProgress>
        )}
    </Box>
    )
}