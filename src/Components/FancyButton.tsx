import { FC } from "react";
import Button from '@mui/material/Button';
export interface IFancyButtonProps {
    name: string
    age: number
};

const FancyButton: FC<IFancyButtonProps> = (props) => {
    const {name, age} = props;
    return (
        <>
            <h1>Hello {name}! You are {age} years old!</h1>
            <Button variant="contained"> Olá Mundo</Button>
        </>
    );
}

export default FancyButton;
