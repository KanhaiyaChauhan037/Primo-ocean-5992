import { Box, Input, Button, InputGroup, InputRightElement, Image, SimpleGrid, Text, Heading, Stack } from "@chakra-ui/react"
import "./Homepage.css"
import Navbar from "./Navbar"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Box30 from "./box30";
import { Navigate, Link } from "react-router-dom";
import Foot from "./Footer";


function Homepage() {

    useEffect(() => {
        AOS.init({
            delay: 150,
            offset: 250,
            duration: 800
        });
    }, [])



    return (
        <>
            <Navbar />
            <Box fontSize="80px" fontWeight="500" marginTop="40px" lineHeight="80px">
                <h1>Market better. Sell faster.<br />
                    Support smarter</h1>
            </Box>
            <Box fontSize="28px" marginTop="30px" color="#bbbbbc">
                <h1>One platform for all your Marketing, Sales, and Support teams</h1>
            </Box>
            <Box marginTop="40px">
                <InputGroup width="630px" margin="auto">
                    <Input
                        variant='outline red'
                        h="73px"
                        padding="6px 172px 6px 30px"
                        borderRadius="35px"
                        width="630px"
                        type="email"
                        placeholder='Your email address'
                        border="2px solid red"


                    />
                    <InputRightElement width="150px" height="54px" >
                        <Link to="/Signup"><Button width="150px" height="54px" marginTop="20px" bg="#ff7342" color="white" borderRadius="30px" marginRight="15px">Get Started
                        </Button> </Link>
                    </InputRightElement>
                </InputGroup>
            </Box>
            <Box width="500px" display="flex" justifyContent="space-evenly" margin="auto" marginTop="30px">
                <Box height="40px" width="170px" display="flex" >
                    <Image height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" alt="logo" />
                    <h1>Free for 15 users</h1></Box>

                <Box height="40px" width="170px" display="flex" >
                    <Image height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" alt="logo" />
                    <h1>Free for 15 users</h1></Box>
            </Box>
            <Box>
                <Image src="https://cdn5.engagebay.com/new/assets/img/banner-image.svg" />
            </Box>
            <Box height="168px" width="1320px" margin="auto" marginTop="20px" paddingTop="50px" border="solid grey" borderTop="none" borderRight="none" borderLeft="none">
                <SimpleGrid columns={7} spacing='40px'>
                    <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/neilpatel.png" />
                    <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/forbs.png" />
                    <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/inc.png" />
                    <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/enterpreneur.png" />
                    <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/techcrunch.png" />
                    <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/jeffbullas.png" />
                    <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/business.png" />
                </SimpleGrid>
            </Box>
            <Box fontSize="38px" fontWeight="bold" marginTop="50px">
                Single Solution for All Your Activities
                <Box fontSize="20px" color="#b0b6c8" fontWeight="lighter" marginTop="30px">Identify new opportunities, convert visitors, deliver customer happiness, and more!</Box>
            </Box>

            <Box width="1285px" height="990px" margin="auto" marginTop="30px">
                <SimpleGrid columns={2} spacing='20px'>

                    {/* <Box-1>*/}

                    <Box data-aos="fade-right" border="1px solid grey" height='489px' width="636px" borderRadius="10px">
                        <Box border="1px solid lightgrey" borderRight="none" borderTop="none" borderLeft="none" width="554PX" height="157px" margin="auto" marginTop="60px" display="flex" justifyContent="space-between">
                            <Box className="detailsdiv">
                                <h1>CRM Software</h1>
                                <p>Store unlimited contacts and build stronger<br /> relationships by keeping track of all your customer<br />details in one place</p>
                            </Box >
                            <Box marginLeft="px" marginTop="20px">
                                <Image src="https://cdn5.engagebay.com/new/assets/img/icons/crm.svg" width="125px" height="125px" />
                            </Box>
                        </Box>
                        <Box width="568px" height="58px" margin="auto" marginTop="20px" textAlign="left" fontSize="16px" fontWeight="500">POPULAR FEATURES</Box>
                        <Box width="568px" height="80px" margin="auto">
                            <SimpleGrid columns={2} spacing='10px'>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Contact Management</Box>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Deal Management</Box>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Sales Automation</Box>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Appointment Scheduling</Box>
                            </SimpleGrid>
                        </Box>
                        <Box textAlign="left" marginLeft="35px" ><Button color="white" width="176px" height="47px" bg="#6639b3" marginTop="25px">Get Started</Button></Box>
                    </Box>


                    <Box data-aos="fade-left" border="1px solid grey" height='489px' width="636px" borderRadius="10px">
                        <Box border=" 1px solid lightgrey" borderRight="none" borderTop="none" borderLeft="none" width="554PX" height="157px" margin="auto" marginTop="60px" display="flex" justifyContent="space-between">
                            <Box className="detailsdiv">
                                <h1>Marketing Automation</h1>
                                <p>Save time by automating your marketing processes <br />and sending personalized messages to target<br /> audiences</p>
                            </Box >
                            <Box marginLeft="px" marginTop="20px">
                                <Image src="https://cdn5.engagebay.com/new/assets/img/icons/marketing-automation.svg" width="125px" height="125px" />
                            </Box>
                        </Box>
                        <Box width="568px" height="58px" margin="auto" marginTop="20px" textAlign="left" fontSize="16px" fontWeight="500">POPULAR FEATURES</Box>
                        <Box width="568px" height="80px" margin="auto">
                            <SimpleGrid columns={2} spacing='10px'>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Forms & Landing Pages</Box>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Email Sequences</Box>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Marketing Automation</Box>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Email Template Builder</Box>
                            </SimpleGrid>
                        </Box>
                        <Box textAlign="left" marginLeft="35px" ><Button color="white" width="176px" height="47px" bg="#6639b3" marginTop="25px">Get Started</Button></Box>
                    </Box>

                    <Box data-aos="fade-right" border="1px solid grey" height='489px' width="636px" borderRadius="10px">
                        <Box border="1px solid lightgrey" borderRight="none" borderTop="none" borderLeft="none" width="554PX" height="157px" margin="auto" marginTop="60px" display="flex" justifyContent="space-between">
                            <Box className="detailsdiv">
                                <h1>Helpdesk Software</h1>
                                <p>Resolve queries faster and deliver exceptional<br />support to delight your customers</p>
                            </Box >
                            <Box marginLeft="px" marginTop="20px">
                                <Image src="https://cdn5.engagebay.com/new/assets/img/icons/helpdesk.svg" width="125px" height="125px" />
                            </Box>
                        </Box>
                        <Box width="568px" height="58px" margin="auto" marginTop="20px" textAlign="left" fontSize="16px" fontWeight="500">POPULAR FEATURES</Box>
                        <Box width="568px" height="80px" margin="auto">
                            <SimpleGrid columns={2} spacing='10px'>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Ticket Management</Box>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Views</Box>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Macro</Box>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Ticket Automation</Box>
                            </SimpleGrid>
                        </Box>
                        <Box textAlign="left" marginLeft="35px" ><Button color="white" width="176px" height="47px" bg="#6639b3" marginTop="25px">Get Started</Button></Box>
                    </Box>



                    <Box data-aos="fade-left" border="1px solid grey" height='489px' width="636px" borderRadius="10px">
                        <Box border="1px solid lightgrey" borderRight="none" borderTop="none" borderLeft="none" width="554PX" height="157px" margin="auto" marginTop="60px" display="flex" justifyContent="space-between">
                            <Box className="detailsdiv">
                                <h1>Live Chat Software</h1>
                                <p>SBoost customer happiness and increase conversions <br />by offering instant help when your customers need<br /> it</p>
                            </Box >
                            <Box marginLeft="px" marginTop="20px">
                                <Image src="https://cdn5.engagebay.com/new/assets/img/icons/livechat.svg" width="125px" height="125px" />
                            </Box>
                        </Box>


                        <Box width="568px" height="58px" margin="auto" marginTop="20px" textAlign="left" fontSize="16px" fontWeight="500">POPULAR FEATURES</Box>
                        <Box width="568px" height="80px" margin="auto">
                            <SimpleGrid columns={2} spacing='10px'>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Instant Support</Box>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Chat Form Customisation</Box>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Shortcuts</Box>
                                <Box width="270px" height="30px" display="flex"><Image width="20px" height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" />Notifications</Box>
                            </SimpleGrid>
                        </Box>
                        <Box textAlign="left" marginLeft="35px" ><Button color="white" width="176px" height="47px" bg="#6639b3" marginTop="25px">Get Started</Button></Box>
                    </Box>
                </SimpleGrid>
            </Box>


            {/* hello */}

            <Box marginTop="8%" width="100%" height="55vh" bg="#2c4fbf">
                <Box color="white" paddingTop="130px" fontSize="25px">
                    <h1>HAPPY CUSTOMERS SHARE GREAT REVIEWS ON G2</h1>
                </Box>
                <Box  >
                    <SimpleGrid data-aos="fade-right" columns={10} spacing={5} padding="20px 40px 20px 90px" alignItems="center" width="95%">
                        <Image src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_AsiaPacific_HighPerformer.svg" />
                        <Image src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_Europe_HighPerformer.svg" />
                        <Image src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_HighPerformer.svg" />
                        <Image src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_HighPerformer_Small-Business_HighPerformer.svg" />
                        <Image src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_HighPerformer.svg" />
                        <Image src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_Mid-Market_HighPerformer.svg" />
                        <Image src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/EmailTracking_HighPerformer_Small-Business_HighPerformer.svg" />
                        <Image src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/HelpDesk_EasiestAdmin_EaseOfAdmin.svg" />
                        <Image src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/OnlineFormBuilder_FastestImplementation_Small-Business_GoLiveTime.svg" />
                        <Image src="https://cdn5.engagebay.com/new/assets/img/Awards-2022/CRM_MomentumLeader_Leader.svg" />


                    </SimpleGrid>
                </Box>
            </Box>

            {/* Box_30 theory */}
            <Box data-aos="fade-up" fontSize="30px" fontFamily="bold.200" marginTop="2%">
                <Heading>Do It All With EngageBay</Heading>
            </Box>
            <Box data-aos="fade-up" fontSize="18px" color="gray" textAlign="center" marginTop="2%">

                <p>Stop paying thousands of dollars to dozens of marketing, sales, and support software. Experience <br /> the world's most affordable, unified software. EngageBay's all-in-one CRM software is the most <br /> comprehensive solution for your business.</p>


            </Box>

            {/* Box-30 */}

            <Box data-aos="fade-up" width="90%" margin="auto" marginTop="5%" padding="10px">

                <SimpleGrid columns={6} spacing={5}>
                    <Box30 />
                </SimpleGrid>
            </Box>

            <Box bg="#f8f9fa" p="5px" mt="30px">
                <Box marginTop="40px" >
                    <Stack>
                        <Text fontSize="35px" fontWeight="bold">Simplify Marketing, Sales, & Support with the best free</Text>
                        <Text fontSize="35px" fontWeight="bold" color="#be70fb">All-In-One CRM software</Text>
                    </Stack>
                    <Stack>
                        <InputGroup width="630px" margin="auto"  mt="2%">

                            <Input
                                variant='outline red'
                                h="73px"
                                padding="6px 172px 6px 30px"
                                borderRadius="35px"
                                width="630px"
                                type="email"
                                placeholder='Your email address'
                                border="2px solid red"


                            />

                            <InputRightElement width="150px" height="54px" >
                                <Link to="/Signup"><Button width="150px" height="54px" marginTop="20px" bg="#ff7342" color="white" borderRadius="30px" marginRight="15px">Get Started
                                </Button> </Link>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>

                </Box>

                <Box width="500px" display="flex" justifyContent="space-evenly" margin="auto" marginTop="30px">
                    <Box height="40px" width="170px" display="flex" >
                        <Image height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" alt="logo" />
                        <h1>Free for 15 users</h1></Box>

                    <Box height="40px" width="170px" display="flex" >
                        <Image height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" alt="logo" />
                        <h1>Free for 15 users</h1></Box>
                </Box>
            </Box>
            {/* footer part */}

            <Box className="gofo">
                <Foot />
            </Box>

        </>
    )
}
export default Homepage