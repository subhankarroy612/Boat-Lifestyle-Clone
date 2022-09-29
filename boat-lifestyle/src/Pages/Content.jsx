import { Box, Button, Center, Container, Divider, Flex, Heading, HStack, Image, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Nl from '../Components/Nl';
import Sbc from '../Components/sbc';
import Slb from '../Components/Slb';
import Video from '../Components/Video';


let crauserImages = [
    {
        url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/SN-Desktop-Banner-Wave-Style_1_1800x.jpg?v=1663914840'
    },
    {
        url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ezgif.com-gif-maker_1_1600x.gif?v=1663841589'
    },
    {
        url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-190-_1_1_1600x.png?v=1664173128'
    },
    {
        url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner_2_7bfc29a0-7d98-4e13-8d4d-a471acde145f_1600x.png?v=1663829195'
    },
]

let slb = [
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569',
        title: 'boAt Airdopes 131',
        price: '₹ 2990',
        dprice: '₹ 899',
        save: '₹ 2091',
        rating: 4.8,
        reviews: 1172,
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MI-1_400x.png?v=1658736611',
        title: 'boAt Airdopes 191G',
        price: '₹ 1199',
        dprice: '₹ 3490',
        save: '₹ 2291 ',
        rating: 4.9,
        reviews: 45,
    },
    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main4_be710999-f389-49c1-9a5a-280d40141a4e_400x.png?v=1654195093',
        title: 'boAt Rockerz 260',
        price: '₹ 999',
        dprice: '₹ 2499',
        save: '₹ 1500',
        rating: 4.9,
        reviews: 81,
    },
    {
        id: 4,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_72207866-b34c-4b47-885d-998168d62245_400x.png?v=1648108781',
        title: 'boAt Wave Lite Smartwatch ',
        price: '₹ 1,299',
        dprice: '₹ 6990',
        save: '₹ 5691 ',
        rating: 4.9,
        reviews: 42,
    },
]

let sbc = [
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_e149ff17-7bd5-45c8-81db-668b35a9c682_150x.png?v=1662980071',
        title: 'AIRDOPES TRUE WIRELESS'
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-1_new_150x.png?v=1663305252',
        title: 'ROKERZ WIRELESS'
    },
    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_new_150x.png?v=1663305235',
        title: 'ROCKERZ HEADPHONES'
    },
    {
        id: 4,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Basshead_new_150x.png?v=1663305091',
        title: 'BASSHEADS WIRED'
    },
    {
        id: 5,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/bassheads-Wired-Headphones_ea55ea05-113b-4ca2-b415-736c2739cc59_150x.png?v=1662976773',
        title: 'BASSHEADS WIRED HEADPHONES'
    },
    {
        id: 6,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortals_481c8210-c7cf-48af-b767-ad5529e5e1f9_150x.png?v=1663838944',
        title: 'IMMORTAL GAMING'
    },
    {
        id: 7,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit_57157db1-8a35-4db2-97ad-69cb09db3097_150x.png?v=1663838502',
        title: 'MISFIT TRIMMERS'
    },
    {
        id: 8,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/smartwatches_new_ee36456a-ebda-49f9-9c08-b681ec622b02_150x.png?v=1663838446',
        title: 'SMART WATCHES'
    },
    {
        id: 9,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_bd8976ab-837d-454a-8e12-53b3c38d79f2_150x.png?v=1663838883',
        title: 'STONE SPEAKERS'
    },
    {
        id: 10,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/home_audio_150x.png?v=1663305152',
        title: 'AAVANTE HOME AUDIO'
    },
    {
        id: 11,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Charger_new_150x.png?v=1663305202',
        title: 'CHARGERS'
    },
    {
        id: 12,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/cables_150x.png?v=1662980890',
        title: 'MOBILE ACCESSORIES'
    },
    {
        id: 13,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Car-accessories_150x.png?v=1662980928',
        title: 'CAR ACCESSORIES'
    },
]

let bs = [
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_300x.png?v=1657869596',
        title: 'boAt Airdopes 141',
        price: '₹ 2990',
        dprice: '₹ 899',
        save: '₹ 2091',
        rating: 4.8,
        reviews: 1172,
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662',
        title: 'boAt Rockerz 333',
        price: '₹ 1199',
        dprice: '₹ 3490',
        save: '₹ 2291 ',
        rating: 4.9,
        reviews: 45,
    },
    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3-2_300x.png?v=1653637007',
        title: 'Watch Wave Neo',
        price: '₹ 999',
        dprice: '₹ 2499',
        save: '₹ 1500',
        rating: 4.9,
        reviews: 81,
    },
    {
        id: 4,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-black_300x.png?v=1612765376',
        title: 'boAt Airdopes 121 v2 ',
        price: '₹ 1,299',
        dprice: '₹ 6990',
        save: '₹ 5691 ',
        rating: 4.9,
        reviews: 42,
    },
    {
        id: 5,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/CMF.1028_300x.png?v=1661155840',
        title: 'Xtend Talk',
        price: '₹ 1,299',
        dprice: '₹ 6990',
        save: '₹ 5691 ',
        rating: 4.9,
        reviews: 42,
    },
]

let bs2 = [
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-black_300x.png?v=1612765376',
        title: 'boAt Airdopes 121 v2',
        price: '₹ 2990',
        dprice: '₹ 899',
        save: '₹ 2091',
        rating: 4.8,
        reviews: 1172,
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_white_300x.png?v=1641206209',
        title: 'boAt Airdopes 161',
        price: '₹ 1199',
        dprice: '₹ 3490',
        save: '₹ 2291 ',
        rating: 4.9,
        reviews: 45,
    },
    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-171-blue_300x.png?v=1633518065',
        title: 'boAt Airdopes 171',
        price: '₹ 999',
        dprice: '₹ 2499',
        save: '₹ 1500',
        rating: 4.9,
        reviews: 81,
    },
    {
        id: 4,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7925e2ed-89e7-4247-8f27-380ef0178294_300x.png?v=1625045867',
        title: 'boAt Airdopes 402',
        price: '₹ 1,299',
        dprice: '₹ 6990',
        save: '₹ 5691 ',
        rating: 4.9,
        reviews: 42,
    },
    {
        id: 5,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_4b76a852-bc9e-4196-b901-bc102ea6b447_300x.png?v=1658534328',
        title: 'boAt Airdopes 148',
        price: '₹ 1,299',
        dprice: '₹ 6990',
        save: '₹ 5691 ',
        rating: 4.9,
        reviews: 42,
    },
]

let bs3 = [
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_72207866-b34c-4b47-885d-998168d62245_300x.png?v=1648108781',
        title: 'boAt Wave Lite',
        price: '₹ 2990',
        dprice: '₹ 899',
        save: '₹ 2091',
        rating: 4.8,
        reviews: 1172,
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_300x.png?v=1647765304',
        title: 'boAt Wave Pro',
        price: '₹ 1199',
        dprice: '₹ 3490',
        save: '₹ 2291 ',
        rating: 4.9,
        reviews: 45,
    },
    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untitled-5_300x.png?v=1658294451',
        title: 'boAt Wave Select',
        price: '₹ 999',
        dprice: '₹ 2499',
        save: '₹ 1500',
        rating: 4.9,
        reviews: 81,
    },
    {
        id: 4,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_300x.png?v=1650387008',
        title: 'boAt Watch Xtend‌ with',
        price: '₹ 1,299',
        dprice: '₹ 6990',
        save: '₹ 5691 ',
        rating: 4.9,
        reviews: 42,
    },
    {
        id: 5,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e7910a39-186a-41f6-ac57-fc3e84108104_300x.png?v=1625045106',
        title: 'boAt Storm Smart',
        price: '₹ 1,299',
        dprice: '₹ 6990',
        save: '₹ 5691 ',
        rating: 4.9,
        reviews: 42,
    },
]

let bs4 = [
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_300x.png?v=1625045615',
        title: 'boAt Rockerz 255 Pro',
        price: '₹ 2990',
        dprice: '₹ 899',
        save: '₹ 2091',
        rating: 4.8,
        reviews: 1172,
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main4_be710999-f389-49c1-9a5a-280d40141a4e_300x.png?v=1654195093',
        title: 'boAt Rockerz 260',
        price: '₹ 1199',
        dprice: '₹ 3490',
        save: '₹ 2291 ',
        rating: 4.9,
        reviews: 45,
    },
    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_300x.png?v=1625045114',
        title: 'boAt Rockerz 235 V2',
        price: '₹ 999',
        dprice: '₹ 2499',
        save: '₹ 1500',
        rating: 4.9,
        reviews: 81,
    },
    {
        id: 4,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_4_300x.png?v=1655719698',
        title: 'boAt Rockerz 245 V2',
        price: '₹ 1,299',
        dprice: '₹ 6990',
        save: '₹ 5691 ',
        rating: 4.9,
        reviews: 42,
    },
    {
        id: 5,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662',
        title: 'boAt Rockerz 333',
        price: '₹ 1,299',
        dprice: '₹ 6990',
        save: '₹ 5691 ',
        rating: 4.9,
        reviews: 42,
    },
]

let bs5 = [
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_9230f72d-9f86-4aec-9ae2-a7d87d332877_600x.png?v=1647426798',
        title: 'boAt Airdopes 411 ANC',
        price: '₹ 2990',
        dprice: '₹ 899',
        save: '₹ 2091',
        rating: 4.8,
        reviews: 1172,
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3_2_300x.png?v=1657293557',
        title: 'Rockerz 330 ANC',
        price: '₹ 1199',
        dprice: '₹ 3490',
        save: '₹ 2291 ',
        rating: 4.9,
        reviews: 45,
    },
    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/413-black_400x.png?v=1658298863',
        title: 'boAt Airdopes 413 ANC',
        price: '₹ 999',
        dprice: '₹ 2499',
        save: '₹ 1500',
        rating: 4.9,
        reviews: 81,
    },
    {
        id: 4,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Main-black_caf27ebe-73b4-4ab6-bc76-3b81f0416fc2_300x.png?v=1650020838',
        title: 'boAt Airdopes 500 ANC',
        price: '₹ 1,299',
        dprice: '₹ 6990',
        save: '₹ 5691 ',
        rating: 4.9,
        reviews: 42,
    },
    {
        id: 5,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4_1_300x.png?v=1657284400',
        title: 'Rockerz 333 ANC',
        price: '₹ 1,299',
        dprice: '₹ 6990',
        save: '₹ 5691 ',
        rating: 4.9,
        reviews: 42,
    },
]

let video = [
    {
        id: 1,
        url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_aNMbCNA29Xi8HUyLtIJkh_card_thumbnail.mp4?v=5829238798220611967',
        title: 'boAt Airdopes 190',
        price: '₹ 3499',
        dprice: '₹ 1299'
    },
    {
        id: 2,
        url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_Icbu8Gdl3GYtBy9W97q10_card_thumbnail.mp4?v=6497212793750359622',
        title: 'boAt Storm Pro Call',
        price: '₹ 1799',
        dprice: '₹ 7990'
    },
    {
        id: 3,
        url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_rfcpupPH91wNHtK3BOvFW_card_thumbnail.mp4?v=3606890552447842088',
        title: 'boAt Xtend Walk',
        price: '₹ 2999',
        dprice: '₹ 6990'
    },
    {
        id: 4,
        url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_rq_O5tqSZIIgR13t0gUaN_card_thumbnail.mp4?v=8992424439691853575',
        title: 'boAt Airdopes 141 Pro',
        price: '₹ 1499',
        dprice: '₹ 2990'
    },
    {
        id: 5,
        url: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/quinn_lUtZiAPq1HANGe2gvJovW_card_thumbnail.mp4?v=4338432963482069035',
        title: 'boAt Wave Select Smartwatch',
        price: '₹ 2499',
        dprice: '₹ 6990'
    }
]


let nl = [
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/orion_300x.png?v=1664177169',
        title: 'boAt Aavante Orion',
        price: '₹ 6,999',
        dprice: '₹ 19,990',
        save: '₹ 12991 ',
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_85232e56-016f-4201-8612-d70525d301b5_400x.png?v=1663821109',
        title: 'boAt Airdopes 190',
        price: '₹ 1,299',
        dprice: '₹ 3,499',
        save: '₹ 2200  ',
    },
    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/B_61732ba6-8448-4c40-858d-557839daff97_300x.png?v=1663758990',
        title: 'boAt Airdopes 393 ANC',
        price: '₹ 2,599',
        dprice: '₹ 4,990',
        save: '₹ 2391',
    },
    {
        id: 4,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245pro3_300x.png?v=1663584969',
        title: 'boAt Rockerz 245 Pro',
        price: '₹ 999',
        dprice: '₹ 2,499',
        save: '₹ 1500  ',
    },
    {
        id: 5,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_f28099c2-bf34-48f9-88dd-dee880b36ec9_300x.png?v=1663246010',
        title: 'boAt Wave Beat',
        price: '₹ 1,399',
        dprice: '₹ 5,990',
        save: '₹ 4591  ',
    },
]

let nl2 = [
    {
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image_300x.png?v=1655534170',
        title: 'Stone 190 DC Edition',
        price: '₹ 999',
        dprice: '₹ 19,990',
        save: '₹ 12991 ',
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_3_f3ee5c27-4f14-4159-9fb2-dc60e7d6ec66_300x.png?v=1655536230',
        title: 'Rockerz 450 - Batman',
        price: '₹ 1,299',
        dprice: '₹ 3,499',
        save: '₹ 2200  ',
    },
    {
        id: 3,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_5_300x.png?v=1655534211',
        title: 'Rockerz 450 DC edition',
        price: '₹ 2,599',
        dprice: '₹ 4,990',
        save: '₹ 2391',
    },
    {
        id: 4,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-3_e05a4bee-499f-42da-8db5-e3921a185f5c_300x.png?v=1655526604',
        title: 'Airdopes 131 DC Edition',
        price: '₹ 999',
        dprice: '₹ 2,499',
        save: '₹ 1500  ',
    },
    {
        id: 5,
        image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-3_55f3214a-ec1f-4764-9efe-1369c6668755_300x.png?v=1655542199',
        title: 'Stone 190 Wonder',
        price: '₹ 1,399',
        dprice: '₹ 5,990',
        save: '₹ 4591  ',
    },
]



let id;

const Content = () => {
    let [crauser, setCrauser] = useState(0);

    if (id) {
        clearInterval(id)
    }
    id = setInterval(() => {
        if (crauser == crauserImages.length - 1) setCrauser(0);
        else
            setCrauser(crauser + 1)
        console.log(crauser);
    }, 2000)


    let handleClick = (n) => {

        if (crauser == 0 && n == -1) {
            setCrauser(crauserImages.length - 1)
        } else if (crauser == crauserImages.length - 1 && n == +1) {
            setCrauser(0)
        } else
            setCrauser(crauser + n)
    }


    return (
        <div style={{ height: '1000vw', marginTop: "5px" }}>
            <Container style={{ position: 'relative' }} h="auto" maxW="95%">
                <Box>
                    <Image src={crauserImages[crauser].url} />
                    <button onClick={() => handleClick(-1)} id='btn1' className='btn'>‹</button>
                    <button onClick={() => handleClick(1)} id='btn2' className='btn'>›</button>
                </Box>
                <Text fontSize="28px" marginTop="40px">SAIL WITH BOAT</Text>
                <Flex gap={10} marginTop="40px">
                    {
                        slb.map((ele) => {
                            return <Slb dprice={ele.dprice} price={ele.price} save={ele.save} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} reviews={ele.reviews} />
                        })
                    }
                </Flex>
                <Text fontSize="28px" marginTop="40px">SHOP BY CATEGORY</Text>
                <SimpleGrid columns={7} spacing={10} marginTop="40px">
                    {
                        sbc.map((ele) => {
                            return <Sbc id={ele.id} title={ele.title} image={ele.image} />
                        })
                    }
                </SimpleGrid>

                <Tabs marginTop="40px" isLazy={true} size='lg'>
                    <TabList color='gray'>
                        <Tab>Best Sellers</Tab>
                        <Tab>Top Earbuds</Tab>
                        <Tab>Smart Watches</Tab>
                        <Tab>Trending Wireless</Tab>
                        <Tab>Trending ANC</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Flex gap={10} marginTop="40px">
                                {
                                    bs.map((ele) => {
                                        return <Slb dprice={ele.dprice} price={ele.price} save={ele.save} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} reviews={ele.reviews} />
                                    })
                                }
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <Flex gap={10} marginTop="40px">
                                {
                                    bs2.map((ele) => {
                                        return <Slb dprice={ele.dprice} price={ele.price} save={ele.save} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} reviews={ele.reviews} />
                                    })
                                }
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <Flex gap={10} marginTop="40px">
                                {
                                    bs3.map((ele) => {
                                        return <Slb dprice={ele.dprice} price={ele.price} save={ele.save} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} reviews={ele.reviews} />
                                    })
                                }
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <Flex gap={10} marginTop="40px">
                                {
                                    bs4.map((ele) => {
                                        return <Slb dprice={ele.dprice} price={ele.price} save={ele.save} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} reviews={ele.reviews} />
                                    })
                                }
                            </Flex>
                        </TabPanel>
                        <TabPanel>
                            <Flex gap={10} marginTop="40px">
                                {
                                    bs5.map((ele) => {
                                        return <Slb dprice={ele.dprice} price={ele.price} save={ele.save} id={ele.id} image={ele.image} title={ele.title} rating={ele.rating} reviews={ele.reviews} />
                                    })
                                }
                            </Flex>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

                <Flex gap={10} marginTop="40px">
                    {
                        video.map((ele) => {
                            return <Video dprice={ele.dprice} price={ele.price} id={ele.id} url={ele.url} title={ele.title} />
                        })
                    }
                </Flex>

                <Tabs marginTop="40px" isLazy={true} size='lg'>
                    <TabList color='gray'>
                        <Tab>New Launches</Tab>
                        <Tab>DC</Tab>
                        <Tab>Marvel</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Flex gap={10} marginTop="40px">
                                {
                                    nl.map((ele) => {
                                        return <Nl dprice={ele.dprice} price={ele.price} save={ele.save} id={ele.id} image={ele.image} title={ele.title} />
                                    })
                                }
                            </Flex>
                        </TabPanel>
                       
                    </TabPanels>
                </Tabs>


            </Container>
        </div>
    );
}

export default Content;
