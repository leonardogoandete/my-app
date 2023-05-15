import { chakra } from "@chakra-ui/react";


// Criação de um componente button
export const Button = chakra("button",  {
    baseStyle: {
        width: "100%",
        height: "50px",
        bg: "gray.300",
        borderRadius: "md",
        variant: "outline",
        _hover: {
            background: "pink.500",
            color: "gray.900"
        }        
    }
})