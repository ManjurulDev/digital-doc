const dummyData = {
  doctors: [
    {
      id: 1,
      name: 'Dr. Georgia Griffin',
      photo: 'https://dl.dropbox.com/s/k1b9c1ijv3oqsas/01.jpg?dl=0',
      price: 24,
      speciality: 'Сardiologist',
      availableHours: [
        '09:00 am - 12:00 pm',
        '12:00 pm - 15:00 pm',
        '15:00 am - 18:00 pm',
        '18:00 pm - 21:00 pm',
      ],
      rating: 5.0,
      is_toprated: true,
      availableTime: [
        '8:15 am',
        '8:30 am',
        '8:45 am',
        '9:00 am',
        '9:15 am',
        '9:45 am',
        '10:00 am',
        '10:15 am',
        '10:30 am',
        '12:15 pm',
        '12:30 pm',
        '12:45 pm',
      ],
      biography_1:
        'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
      biography_2:
        'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
      reviews: [
        {
          id: 1,
          name: 'Lana Hansen',
          photo: 'https://dl.dropbox.com/s/myh72tic6hf4inj/01.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 2,
          name: 'Erik Pineda',
          photo: 'https://dl.dropbox.com/s/uzet08kpc18hsso/02.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 3,
          name: 'Joanna Mccullough',
          photo: 'https://dl.dropbox.com/s/pivaz3vjzhpe3qa/03.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 4,
          name: 'Johnathan Montes',
          photo: 'https://dl.dropbox.com/s/s5qcaqh7q724z5t/04.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
      ],
      certificates: [
        'https://dl.dropbox.com/s/3skbynwkr157mxq/01.jpg?dl=0',
        'https://dl.dropbox.com/s/9r7pq7gdc0x1d6x/02.jpg?dl=0',
        'https://dl.dropbox.com/s/nl9gfwlwvey1bxd/03.jpg?dl=0',
      ],
    },
    {
      id: 2,
      name: 'Dr. Bernard Butler',
      photo: 'https://dl.dropbox.com/s/8rovc7z9jpuy03v/02.jpg?dl=0',
      price: 24,
      speciality: 'Dentist',
      availableHours: [
        '09:00 am - 12:00 pm',
        '12:00 pm - 15:00 pm',
        '15:00 am - 18:00 pm',
        '18:00 pm - 21:00 pm',
      ],
      rating: 5.0,
      is_toprated: true,
      availableTime: [
        '8:15 am',
        '8:30 am',
        '8:45 am',
        '9:00 am',
        '9:15 am',
        '9:45 am',
        '10:00 am',
        '10:15 am',
        '10:30 am',
        '12:15 pm',
        '12:30 pm',
        '12:45 pm',
      ],
      biography_1:
        'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
      biography_2:
        'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
      reviews: [
        {
          id: 1,
          name: 'Lana Hansen',
          photo: 'https://dl.dropbox.com/s/myh72tic6hf4inj/01.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 2,
          name: 'Erik Pineda',
          photo: 'https://dl.dropbox.com/s/uzet08kpc18hsso/02.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 3,
          name: 'Joanna Mccullough',
          photo: 'https://dl.dropbox.com/s/pivaz3vjzhpe3qa/03.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 4,
          name: 'Johnathan Montes',
          photo: 'https://dl.dropbox.com/s/s5qcaqh7q724z5t/04.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
      ],
      certificates: [
        'https://dl.dropbox.com/s/3skbynwkr157mxq/01.jpg?dl=0',
        'https://dl.dropbox.com/s/3skbynwkr157mxq/01.jpg?dl=0',
        'https://dl.dropbox.com/s/3skbynwkr157mxq/01.jpg?dl=0',
      ],
    },
    {
      id: 3,
      name: 'Dr. Maribel Fletcher',
      photo: 'https://dl.dropbox.com/s/m6mwj078nmz0vam/03.jpg?dl=0',
      price: 24,
      speciality: 'Dermatologists',
      availableHours: [
        '09:00 am - 12:00 pm',
        '12:00 pm - 15:00 pm',
        '15:00 am - 18:00 pm',
        '18:00 pm - 21:00 pm',
      ],
      rating: 5.0,
      is_toprated: true,
      availableTime: [
        '8:15 am',
        '8:30 am',
        '8:45 am',
        '9:00 am',
        '9:15 am',
        '9:45 am',
        '10:00 am',
        '10:15 am',
        '10:30 am',
        '12:15 pm',
        '12:30 pm',
        '12:45 pm',
      ],
      biography_1:
        'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
      biography_2:
        'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
      reviews: [
        {
          id: 1,
          name: 'Lana Hansen',
          photo: 'https://dl.dropbox.com/s/myh72tic6hf4inj/01.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 2,
          name: 'Erik Pineda',
          photo: 'https://dl.dropbox.com/s/uzet08kpc18hsso/02.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 3,
          name: 'Joanna Mccullough',
          photo: 'https://dl.dropbox.com/s/pivaz3vjzhpe3qa/03.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 4,
          name: 'Johnathan Montes',
          photo: 'https://dl.dropbox.com/s/s5qcaqh7q724z5t/04.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
      ],
      certificates: [
        'https://dl.dropbox.com/s/3skbynwkr157mxq/01.jpg?dl=0',
        'https://dl.dropbox.com/s/3skbynwkr157mxq/01.jpg?dl=0',
        'https://dl.dropbox.com/s/3skbynwkr157mxq/01.jpg?dl=0',
      ],
    },
    {
      id: 4,
      name: 'Dr. Zack Castillo',
      photo: 'https://dl.dropbox.com/s/op5xbuqe8j1tf7z/04.jpg?dl=0',
      price: 24,
      speciality: 'Neurologists',
      availableHours: [
        '09:00 am - 12:00 pm',
        '12:00 pm - 15:00 pm',
        '15:00 am - 18:00 pm',
        '18:00 pm - 21:00 pm',
      ],
      rating: 5.0,
      is_toprated: true,
      availableTime: [
        '8:15 am',
        '8:30 am',
        '8:45 am',
        '9:00 am',
        '9:15 am',
        '9:45 am',
        '10:00 am',
        '10:15 am',
        '10:30 am',
        '12:15 pm',
        '12:30 pm',
        '12:45 pm',
      ],
      biography_1:
        'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
      biography_2:
        'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
      reviews: [
        {
          id: 1,
          name: 'Lana Hansen',
          photo: 'https://dl.dropbox.com/s/myh72tic6hf4inj/01.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 2,
          name: 'Erik Pineda',
          photo: 'https://dl.dropbox.com/s/uzet08kpc18hsso/02.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 3,
          name: 'Joanna Mccullough',
          photo: 'https://dl.dropbox.com/s/pivaz3vjzhpe3qa/03.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 4,
          name: 'Johnathan Montes',
          photo: 'https://dl.dropbox.com/s/s5qcaqh7q724z5t/04.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
      ],
      certificates: [
        'https://dl.dropbox.com/s/3skbynwkr157mxq/01.jpg?dl=0',
        'https://dl.dropbox.com/s/3skbynwkr157mxq/01.jpg?dl=0',
        'https://dl.dropbox.com/s/3skbynwkr157mxq/01.jpg?dl=0',
      ],
    },
    {
      id: 5,
      name: 'Dr. Ricky Farrell',
      photo: 'https://dl.dropbox.com/s/yedezag4qxy8mwk/05.jpg?dl=0',
      price: 24,
      speciality: 'Neurologists',
      availableHours: [
        '09:00 am - 12:00 pm',
        '12:00 pm - 15:00 pm',
        '15:00 am - 18:00 pm',
        '18:00 pm - 21:00 pm',
      ],
      rating: 5.0,
      is_toprated: true,
      availableTime: [
        '8:15 am',
        '8:30 am',
        '8:45 am',
        '9:00 am',
        '9:15 am',
        '9:45 am',
        '10:00 am',
        '10:15 am',
        '10:30 am',
        '12:15 pm',
        '12:30 pm',
        '12:45 pm',
      ],
      biography_1:
        'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
      biography_2:
        'Amet amet Lorem eu consectetur in deserunt nostrud dolor culpa ad sint amet. Nostrud deserunt consectetur culpa minim mollit veniam aliquip pariatur exercitation ullamco ea voluptate et. Pariatur ipsum mollit magna proident nisi ipsum.',
      reviews: [
        {
          id: 1,
          name: 'Lana Hansen',
          photo: 'https://dl.dropbox.com/s/myh72tic6hf4inj/01.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 2,
          name: 'Erik Pineda',
          photo: 'https://dl.dropbox.com/s/uzet08kpc18hsso/02.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 3,
          name: 'Joanna Mccullough',
          photo: 'https://dl.dropbox.com/s/pivaz3vjzhpe3qa/03.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
        {
          id: 4,
          name: 'Johnathan Montes',
          photo: 'https://dl.dropbox.com/s/s5qcaqh7q724z5t/04.jpg?dl=0',
          rating: 5.0,
          date: '23 Jan 2023 at 3:45 pm',
          review:
            'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
        },
      ],
      certificates: [
        'https://dl.dropbox.com/s/3skbynwkr157mxq/01.jpg?dl=0',
        'https://dl.dropbox.com/s/3skbynwkr157mxq/01.jpg?dl=0',
        'https://dl.dropbox.com/s/3skbynwkr157mxq/01.jpg?dl=0',
      ],
    },
  ],
  pastAppointments: [
    {
      id: 1,
      speciality: 'Сardiologist',
      name: 'Dr. Georgia Griffin',
      photo: 'https://dl.dropbox.com/s/k1b9c1ijv3oqsas/01.jpg?dl=0',
      price: 24,
      date: 'Jan 15, Sunday',
      rating: 5.0,
    },
    {
      id: 2,
      speciality: 'Dentist',
      name: 'Dr. Bernard Butler',
      photo: 'https://dl.dropbox.com/s/8rovc7z9jpuy03v/02.jpg?dl=0',
      price: 24,
      date: 'Dec 08, Thursday',
      rating: 5.0,
    },
    {
      id: 3,
      speciality: 'Dermatologists',
      name: 'Dr. Maribel Fletcher',
      photo: 'https://dl.dropbox.com/s/m6mwj078nmz0vam/03.jpg?dl=0',
      price: 24,
      date: 'Sep 19, Monday',
      rating: 5.0,
    },
  ],
};

export {dummyData};
