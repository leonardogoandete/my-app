import { Button, Flex, IconButton, Link, Switch, useColorMode } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Header } from "../Header"

function Home() {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"

    return (
        <Header>
            <Flex>
                <Flex pos="fixed" top="1rem" right="1rem" align="center">
                    <Flex display={["none", "none", "flex", "flex"]}>
                        <Link href="/">
                            <Button variant="ghost" colorScheme="green" aria-label="Home" my={5} w="100%">
                                Home
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="ghost" colorScheme="green" aria-label="Contact" my={5} w="100%">
                                Contact
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="ghost" colorScheme="green" aria-label="About" my={5} w="100%">
                                About
                            </Button>
                        </Link>
                    </Flex>
                        <IconButton aria-label="Open Menu" size="lg" mr={2} icon={<HamburgerIcon/>} display={["flex", "flex", "none", "none"]}/>
                </Flex>
                <Switch color="gray.300" isChecked={isDark} onChange={toggleColorMode}/>
            </Flex>
        </Header>
    )
}


export default Home