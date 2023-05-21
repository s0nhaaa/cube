'use client'

import Bio from '@/components/bio'
import BottomNavBar from '@/components/bottom-nav-bar'
import Profile from '@/components/profile'
import Setting from '@/components/setting'
import { SolanaWalletProvider } from '@/components/solana-wallet-provider'
import { useAppStore } from '@/stores/app'
import { UserOwner } from '@/types/user-owner'
import { LogOut } from 'lucide-react'
import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Props {
  user?: UserOwner | null
}

export default function Sample({ user }: Props) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [tab, switchTab] = useAppStore((state) => [state.tab, state.switchTab])

  const createSession = async () => {
    setIsLoading(true)
    const response = await fetch('/api/candypay', {
      method: 'POST',
    })
    const data = await response.json()

    router.push(data.payment_url)
    setIsLoading(false)
  }

  return (
    <>
      <SolanaWalletProvider>
        {user ? (
          <>
            <div className='bg-base-200 w-full'>
              <section className='w-full flex flex-col items-center h-fit '>
                <div className='w-[60%] mt-40'>
                  <button className='btn btn-square' onClick={() => signOut()}>
                    <LogOut />
                  </button>

                  <Bio currentUser={user} />

                  {
                    {
                      profile: <Profile user={user} />,
                      setting: <Setting wallet={user.walletAddress} />,
                    }[tab]
                  }
                </div>

                <div className=' h-20 w-10'></div>
              </section>

              <BottomNavBar />
            </div>
          </>
        ) : (
          <div className='bg-base-200 w-[100%] h-screen flex items-center justify-center overflow-hidden'>
            <div className='w-full flex items-center justify-center absolute inset-0 z-0 overflow-hidden'>
              <svg
                className='w-full h-auto'
                width='1920'
                height='1080'
                viewBox='0 0 1920 1080'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect width='1920' height='1080' fill='#242933' />
                <path
                  d='M876.44 446.152C855.992 446.152 842.744 431.944 842.744 409.96C842.744 388.168 856.472 373.672 877.016 373.672C893.624 373.672 906.008 383.368 908.408 398.44H895.448C893.048 390.28 886.04 385.48 876.728 385.48C863.768 385.48 855.608 394.888 855.608 409.864C855.608 424.744 863.864 434.344 876.728 434.344C886.232 434.344 893.528 429.352 895.832 421.576H908.6C905.912 436.36 893.048 446.152 876.44 446.152ZM950.052 397.576H961.764V445H950.916L950.052 438.664C947.172 443.176 941.028 446.248 934.692 446.248C923.748 446.248 917.316 438.856 917.316 427.24V397.576H929.028V423.112C929.028 432.136 932.58 435.784 939.108 435.784C946.5 435.784 950.052 431.464 950.052 422.44V397.576ZM984.709 445H973.861V373.576H985.573V404.488C988.645 399.208 994.981 396.04 1002.18 396.04C1015.72 396.04 1023.97 406.6 1023.97 421.576C1023.97 436.168 1015.04 446.248 1001.41 446.248C994.309 446.248 988.261 443.08 985.477 437.608L984.709 445ZM985.669 421.096C985.669 429.64 990.949 435.496 999.013 435.496C1007.27 435.496 1012.16 429.544 1012.16 421.096C1012.16 412.648 1007.27 406.6 999.013 406.6C990.949 406.6 985.669 412.552 985.669 421.096ZM1054.51 446.248C1040.4 446.248 1030.51 435.976 1030.51 421.288C1030.51 406.408 1040.21 396.136 1054.13 396.136C1068.34 396.136 1077.36 405.64 1077.36 420.424V423.976L1041.65 424.072C1042.51 432.424 1046.93 436.648 1054.71 436.648C1061.14 436.648 1065.36 434.152 1066.71 429.64H1077.55C1075.54 440.008 1066.9 446.248 1054.51 446.248ZM1054.23 405.736C1047.31 405.736 1043.09 409.48 1041.94 416.584H1065.75C1065.75 410.056 1061.23 405.736 1054.23 405.736Z'
                  fill='white'
                />
                <g clip-path='url(#clip0_1_2)'>
                  <path
                    d='M1296.46 222.987L1296.24 237.995C1296.19 240.075 1297.53 242.79 1299.2 244.042L1309.07 251.437C1315.38 256.169 1314.41 262.023 1306.87 264.386L1294.12 268.429C1291.96 269.114 1289.76 271.452 1289.18 273.644L1286.19 285.285C1283.83 294.496 1277.81 295.414 1272.76 287.34L1265.74 276.098C1264.47 274.067 1261.46 272.504 1259.04 272.622L1245.81 273.366C1236.33 273.909 1233.6 268.411 1239.74 261.2L1247.53 252.052C1248.99 250.317 1249.64 247.17 1248.95 245.011L1244.91 232.261C1242.53 224.754 1246.72 220.568 1254.22 222.998L1265.95 226.804C1267.9 227.429 1270.9 226.962 1272.57 225.724L1284.71 216.895C1291.31 212.114 1296.59 214.852 1296.46 222.987Z'
                    fill='#421691'
                    stroke='#661AE6'
                    stroke-width='15'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <g clip-path='url(#clip1_1_2)'>
                  <path
                    d='M689.457 418.987L689.237 433.995C689.189 436.075 690.531 438.79 692.201 440.042L702.072 447.437C708.382 452.169 707.409 458.023 699.869 460.386L687.118 464.429C684.959 465.114 682.758 467.452 682.18 469.644L679.195 481.285C676.825 490.496 670.807 491.414 665.757 483.34L658.741 472.098C657.474 470.067 654.461 468.504 652.037 468.622L638.806 469.366C629.331 469.909 626.597 464.411 632.741 457.2L640.535 448.052C641.993 446.317 642.636 443.17 641.951 441.011L637.908 428.261C635.528 420.754 639.717 416.568 647.221 418.998L658.952 422.804C660.905 423.429 663.897 422.962 665.57 421.724L677.708 412.895C684.311 408.114 689.593 410.852 689.457 418.987Z'
                    fill='#421691'
                    stroke='#661AE6'
                    stroke-width='15'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <g clip-path='url(#clip2_1_2)'>
                  <path
                    d='M873.862 263.215L873.769 269.56C873.749 270.44 874.316 271.587 875.022 272.117L879.195 275.243C881.863 277.244 881.452 279.719 878.264 280.718L872.873 282.427C871.96 282.717 871.03 283.706 870.785 284.632L869.523 289.554C868.521 293.448 865.977 293.836 863.842 290.423L860.875 285.67C860.34 284.811 859.066 284.15 858.041 284.2L852.447 284.515C848.441 284.744 847.285 282.42 849.883 279.371L853.178 275.503C853.795 274.77 854.067 273.439 853.777 272.526L852.068 267.136C851.061 263.962 852.833 262.192 856.005 263.22L860.965 264.829C861.79 265.093 863.055 264.895 863.763 264.372L868.895 260.639C871.686 258.618 873.92 259.776 873.862 263.215Z'
                    fill='#AE1E88'
                    stroke='#D926AA'
                    stroke-width='6.34184'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <g clip-path='url(#clip3_1_2)'>
                  <path
                    d='M1089.86 521.215L1089.77 527.56C1089.75 528.44 1090.32 529.587 1091.02 530.117L1095.2 533.243C1097.86 535.244 1097.45 537.719 1094.26 538.718L1088.87 540.427C1087.96 540.717 1087.03 541.706 1086.79 542.632L1085.52 547.554C1084.52 551.448 1081.98 551.836 1079.84 548.423L1076.88 543.67C1076.34 542.811 1075.07 542.15 1074.04 542.2L1068.45 542.515C1064.44 542.744 1063.29 540.42 1065.88 537.371L1069.18 533.503C1069.79 532.77 1070.07 531.439 1069.78 530.526L1068.07 525.136C1067.06 521.962 1068.83 520.192 1072.01 521.22L1076.96 522.829C1077.79 523.093 1079.06 522.895 1079.76 522.372L1084.89 518.639C1087.69 516.618 1089.92 517.776 1089.86 521.215Z'
                    fill='#003320'
                    stroke='#36D399'
                    stroke-width='6.34184'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <path
                  d='M1132.74 384.22C1156.2 371.666 1197.41 339.111 1174.59 309.322C1146.07 272.085 1132.04 331.607 1148.39 341.329C1161.46 349.107 1204.66 316.489 1224.62 299.208'
                  stroke='#A6ADBB'
                  stroke-width='8'
                  stroke-linecap='round'
                  stroke-dasharray='20 20'
                />
                <defs>
                  <clipPath id='clip0_1_2'>
                    <rect
                      width='91.5324'
                      height='91.5324'
                      fill='white'
                      transform='translate(1256.13 187) rotate(27.4057)'
                    />
                  </clipPath>
                  <clipPath id='clip1_1_2'>
                    <rect
                      width='91.5324'
                      height='91.5324'
                      fill='white'
                      transform='translate(649.131 383) rotate(27.4057)'
                    />
                  </clipPath>
                  <clipPath id='clip2_1_2'>
                    <rect
                      width='38.699'
                      height='38.699'
                      fill='white'
                      transform='translate(856.813 248) rotate(27.4057)'
                    />
                  </clipPath>
                  <clipPath id='clip3_1_2'>
                    <rect
                      width='38.699'
                      height='38.699'
                      fill='white'
                      transform='translate(1072.81 506) rotate(27.4057)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <button className='btn btn-primary absolute z-10 bottom-20' onClick={() => signIn('google')}>
              Start w/ Google Account
            </button>
          </div>
        )}
      </SolanaWalletProvider>
    </>
  )
}
