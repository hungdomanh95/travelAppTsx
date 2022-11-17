import {ImageSourcePropType} from 'react-native';

export interface IDestination {
  id: number;
  image: ImageSourcePropType;
  name: string;
  rating: number;
  place: string;
  price: number;
  avatarOwn: ImageSourcePropType;
  content: string;
  listHotel: ImageSourcePropType[];
}
export const data_destination: IDestination[] = [
  {
    id: 1,
    image: require('../assets/place1.jpeg'),
    name: 'Niladri Reservoir',
    rating: 4.7,
    place: 'Tekergat, Sunamgnj',
    price: 59,
    avatarOwn: require('../assets/avatar2.png'),
    content:
      'You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC. You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC.You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC.',
    listHotel: [
      require('../assets/hotel1.jpeg'),
      require('../assets/hotel6.jpg'),
      require('../assets/hotel2.jpeg'),
      require('../assets/hotel3.jpeg'),
      require('../assets/hotel4.jpeg'),
      require('../assets/hotel5.jpeg'),
      require('../assets/hotel3.jpeg'),
      require('../assets/hotel1.jpeg'),
      require('../assets/hotel4.jpeg'),
      require('../assets/hotel5.jpeg'),
      require('../assets/hotel2.jpeg'),
    ],
  },
  {
    id: 2,
    image: require('../assets/place2.jpeg'),
    name: 'Darma Reservoir',
    rating: 4.9,
    place: 'Darma, Kuningan',
    price: 59,
    avatarOwn: require('../assets/avatar2.png'),
    content:
      'You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC. You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC.You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC.',
    listHotel: [
      require('../assets/hotel1.jpeg'),
      require('../assets/hotel2.jpeg'),
      require('../assets/hotel3.jpeg'),
      require('../assets/hotel4.jpeg'),
      require('../assets/hotel5.jpeg'),
      require('../assets/hotel3.jpeg'),
      require('../assets/hotel1.jpeg'),
      require('../assets/hotel4.jpeg'),
      require('../assets/hotel5.jpeg'),
      require('../assets/hotel2.jpeg'),
    ],
  },
  {
    id: 3,
    image: require('../assets/place1.jpeg'),
    name: 'Niladri Reservoir',
    rating: 4.7,
    place: 'Tekergat, Sunamgnj',
    price: 59,
    avatarOwn: require('../assets/avatar2.png'),
    content:
      'You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC. You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC.You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC.',
    listHotel: [
      require('../assets/hotel1.jpeg'),
      require('../assets/hotel2.jpeg'),
      require('../assets/hotel3.jpeg'),
      require('../assets/hotel4.jpeg'),
      require('../assets/hotel5.jpeg'),
      require('../assets/hotel3.jpeg'),
      require('../assets/hotel1.jpeg'),
      require('../assets/hotel4.jpeg'),
      require('../assets/hotel5.jpeg'),
      require('../assets/hotel2.jpeg'),
    ],
  },
  {
    id: 4,
    image: require('../assets/place2.jpeg'),
    name: 'Darma Reservoir',
    rating: 4.9,
    place: 'Darma, Kuningan',
    price: 59,
    avatarOwn: require('../assets/avatar2.png'),
    content:
      'You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC. You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC.You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC.',
    listHotel: [
      require('../assets/hotel1.jpeg'),
      require('../assets/hotel2.jpeg'),
      require('../assets/hotel3.jpeg'),
      require('../assets/hotel4.jpeg'),
      require('../assets/hotel5.jpeg'),
      require('../assets/hotel3.jpeg'),
      require('../assets/hotel1.jpeg'),
      require('../assets/hotel4.jpeg'),
      require('../assets/hotel5.jpeg'),
      require('../assets/hotel2.jpeg'),
    ],
  },
];

export interface IListBottomTab {
  id: number;
  name: string;
  image: ImageSourcePropType;
  imageActive: ImageSourcePropType;
}
export const LIST_BOTTOM_TAB: IListBottomTab[] = [
  {
    id: 1,
    name: 'Home',
    image: require('../assets/icon-home.png'),
    imageActive: require('../assets/icon-home-active.png'),
  },
  {
    id: 2,
    name: 'Calendar',
    image: require('../assets/icon-calendar.png'),
    imageActive: require('../assets/icon-calendar-active.png'),
  },
  {
    id: 3,
    name: 'Search',
    image: require('../assets/icon-search.png'),
    imageActive: require('../assets/icon-search.png'),
  },
  {
    id: 4,
    name: 'Messages',
    image: require('../assets/icon-chat.png'),
    imageActive: require('../assets/icon-chat-active.png'),
  },
  {
    id: 5,
    name: 'Profile',
    image: require('../assets/icon-user.png'),
    imageActive: require('../assets/icon-user.png'),
  },
];
