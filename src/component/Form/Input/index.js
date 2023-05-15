import { chakra, shouldForwardProp } from "@chakra-ui/react";

// COnstruindo um componente de input
export const Input = chakra("input", {
    shouldForwardProp: (prop) =>{
        const isChakraProp = !shouldForwardProp(prop)
        if(isChakraProp) return false
        return ["simple","big"].includes(prop)
    },
    baseStyle: {
        width: "100%",
        height: "50px",
        bg: "gray.300",
        borderRadius: "md"
    }
})