import logo from '@/assets/images/aimicromind_logo.svg'
import logoDark from '@/assets/images/aimicromind_logo_dark.svg'

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <img
                style={{ objectFit: 'contain', height: 'auto', width: 100 }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='AiMicroMind'
            />
        </div>
    )
}

export default Logo
