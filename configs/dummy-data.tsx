import { Keypair, PublicKey } from '@solana/web3.js'

const fakename = [
  'rebelhonored',
  'sleddersmoked',
  'twinstamp',
  'quicksledder',
  'boringgorgeous',
  'rapidfragrant',
  'rabideverybody',
  'spindlefirethorn',
  'pregnancyaffair',
  'pathtight',
  'barcrummy',
  'bowpanties',
  'informamiable',
  'guillemotouthaul',
  'mounttissue',
  'fizzcompetent',
  'burnetguacamole',
  'properinborn',
  'heightcounselor',
  'teamsigh',
  'transferruby',
  'viewericecream',
  'giganticbeaver',
  'alligatorspawn',
  'porkimmigrant',
  'hairscientific',
  'stabletendon',
  'untilare',
  'volumereader',
  'poachedactivity',
  'armpitdense',
  'burgernun',
  'creationopulent',
  'clogshonorable',
  'cornerhide',
  'articulatecloser',
  'livehomework',
  'himbored',
  'babyseal',
  'fatiguesjigsaw',
  'thirtymillion',
  'tumblereal',
  'vigilantconstitute',
  'patheticpussy',
  'criteriaadmission',
  'immaculateoffer',
  'marbledplain',
  'brokerscientist',
  'elfalliance',
  'skunkslide',
]

const fakeMessage = [
  'Hey, your content brings so much joy to my day! I wanted to show my appreciation by donating and supporting your amazing streams. Keep up the great work!',
  "Thank you for entertaining us with your incredible streams! I've decided to donate as a token of my gratitude. Your energy and passion are truly inspiring",
  "I've been a loyal viewer for a while now, and I wanted to give back by donating. Your streams have helped me through tough times, and I want to support you in return. Keep being awesome",
  "I'm blown away by your talent and dedication. Your streams always bring a smile to my face. Consider this donation as a small token of my appreciation for the countless hours of entertainment you provide",
  'our streams have become a part of my daily routine. Your positivity and engagement with your community are incredible.',
  "Your streams have brought people together and fostered friendships. Consider this donation as my way of saying 'thank you' for all you've done.",
  "I've been following your journey since the beginning, and it's been incredible to watch your growth. Your dedication and hard work deserve recognition",
]

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

export const TOP_DONATE = Array(5)
  .fill(0)
  .map((_, index) => {
    return {
      id: (Date.now() + index).toString(),
      name: fakename[index],
      walletAddress: new Keypair().publicKey.toString(),
      total: getRandomNumber(10, 20),
    }
  })

export const RECENT_DONATE = Array(7)
  .fill(0)
  .map((_, index) => {
    return {
      id: (Date.now() + index).toString(),
      name: fakename[7 + index],
      walletAddress: new Keypair().publicKey.toString(),
      total: getRandomNumber(0.5, 5),
      message: fakeMessage[index],
    }
  })

export const MEMBERS = Array(5)
  .fill(0)
  .map((_, index) => {
    return {
      id: (Date.now() + index).toString(),
      walletAddress: new Keypair().publicKey.toString(),
    }
  })
