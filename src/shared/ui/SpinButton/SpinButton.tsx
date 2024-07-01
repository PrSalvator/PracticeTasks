import { Box, Button, CircularProgress } from "@mui/material"
import { ReactNode } from "react";

interface Props{
    isLoading: boolean;
    type?: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
}

export const SpinButton = ({isLoading, type, children}: Props) => {
    return(
    <Box sx={{position: 'relative'}} className="p-0">
        <Button disabled={isLoading} sx={{width: '100%'}} type={type} className="mt-3" variant="contained">{children}</Button>
        {isLoading && (
            <CircularProgress color='success' size={24} sx={{position: 'absolute', top: '50%', left: '50%', marginTop: '-3px', marginLeft: '-12px'}}></CircularProgress>
        )}
    </Box>
    )
}