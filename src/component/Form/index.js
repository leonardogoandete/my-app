import { Flex, FormControl, FormLabel } from "@chakra-ui/react"
import { Input } from "./Input"
import { Button } from "./Button"

export function From(){
    return(
        <Flex w="100vw" h="100vh" align="center" justify="center" role="Teste">
            <Flex as="form" w="100%" maxWidth="360" b="gray.800" p="8" borderRadius="8" flexDir="column">
                <FormControl>
                    <FormLabel color="gray.600">E-mail</FormLabel>
                    <Input/>
                    <FormLabel color="gray.500" aria-label="olaaa">Senha</FormLabel>
                    <Input/>
                </FormControl>
                <Button aria-label="Entrar" aria-hidden="true" type="submit" mt="12">Entrar</Button>
            </Flex>    
        </Flex>
    )
}