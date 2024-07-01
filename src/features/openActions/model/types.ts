export interface IAchorOrigin{
    vertical: verticalPosition;
    horizontal: horizontalPosition;
}

type verticalPosition = 'top' | 'center' | 'bottom';
type horizontalPosition = 'left' | 'center' | 'right';