'use client'
import { Button, IconButton } from '@mui/material'
import Image from 'next/image'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'

const Header = () => {
	return (
		<header className='flex'>
			<Image src={'/logo.png'} alt='Logo barbershopu' width={500} height={500} />
			<p>Jesteśmy salonem, który zadba o Twoje włosy i brodę na innym poziomie niż miałeś okazję doświadczyć.</p>
			<Button
				variant='outlined'
				href='https://booksy.com/pl-pl/147660_barbershop-vice-city_barber-shop_12859_zory'>
				rezerwuj
			</Button>
			<IconButton>
				<FacebookRoundedIcon />
			</IconButton>
			<IconButton>
				<InstagramIcon />
			</IconButton>
		</header>
	)
}

export { Header }
