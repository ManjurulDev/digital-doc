import {svg} from '../assets';

const onboarding = [
  {
    id: 1,
    title: `Welcome to${'\n'}Digital doc!`,
    description: `Passionate about Discovery.${'\n'}Committed to best service.`,
    illustration: svg.IllustrationOneSvg,
  },
  {
    id: 2,
    title: `Find your doctor and Make an${'\n'}appointment with ease!`,
    description: `Labore sunt culpa excepteur culpa${'\n'}occaecat ex nisi mollit.`,
    illustration: svg.IllustrationTwoSvg,
  },
  {
    id: 3,
    title: `Download your prescription${'\n'}and test results!`,
    description: `Labore sunt culpa excepteur culpa${'\n'}occaecat ex nisi mollit.`,
    illustration: svg.IllustrationThreeSvg,
  },
];

const categories = [
  {
    id: 1,
    name: 'Cardiology',
    icon: require('../assets/icons/01.png'),
  },
  {
    id: 2,
    name: 'Gynecology',
    icon: require('../assets/icons/02.png'),
  },
  {
    id: 3,
    name: 'Nephrology',
    icon: require('../assets/icons/03.png'),
  },
  {
    id: 4,
    name: 'Dentistry',
    icon: require('../assets/icons/04.png'),
  },
  {
    id: 5,
    name: 'Nephrology',
    icon: require('../assets/icons/05.png'),
  },
  {
    id: 6,
    name: 'Oncology',
    icon: require('../assets/icons/06.png'),
  },
  {
    id: 7,
    name: 'Otolaryngology',
    icon: require('../assets/icons/07.png'),
  },
  {
    id: 8,
    name: 'Ophthalmology',
    icon: require('../assets/icons/08.png'),
  },
  {
    id: 9,
    name: 'Neurology',
    icon: require('../assets/icons/09.png'),
  },
];

const notifications = [
  {
    id: 1,
    message: 'Your blood test is ready',
    description: 'Consequat ut ea dolor aliqua laborum tempor Lorem culpa.',
    time: '23 Jan 2023 at 3:45 pm',
    read: true,
    status: 'test is ready',
  },
  {
    id: 2,
    message: 'Your blood test is ready',
    description: 'Consequat ut ea dolor aliqua laborum tempor Lorem culpa.',
    time: '23 Jan 2023 at 3:45 pm',
    read: true,
    icon: svg.BloodTestSvg,
    status: 'apointment is confirmed',
  },
  {
    id: 3,
    message: 'Your blood test is ready',
    description: 'Consequat ut ea dolor aliqua laborum tempor Lorem culpa.',
    time: '23 Jan 2023 at 3:45 pm',
    read: false,
    icon: svg.BloodTestSvg,
    status: 'apointment is rejected',
  },
  {
    id: 4,
    message: 'Your blood test is ready',
    description: 'Consequat ut ea dolor aliqua laborum tempor Lorem culpa.',
    time: '23 Jan 2023 at 3:45 pm',
    read: false,
    icon: svg.BloodTestSvg,
    status: 'test is ready',
  },
];

const diagnosticsAndTests = [
  {
    id: 1,
    name: 'Cellular and chemical analysis',
    icon: svg.VirusSvg,
  },
  {
    id: 2,
    name: 'Diagnostic imaging',
    icon: svg.UltrasoundSvg,
  },
  {
    id: 3,
    name: 'Genetic testing',
    icon: svg.DnaStructureSvg,
  },
  {
    id: 4,
    name: 'Measurement',
    icon: svg.HeartBeatSvg,
  },
  {
    id: 5,
    name: 'Physical and visual examination',
    icon: svg.PatientSvg,
  },
];

const availableHours = [
  '09:00 am - 12:00 pm',
  '12:00 pm - 15:00 pm',
  '15:00 am - 18:00 pm',
  '18:00 pm - 21:00 pm',
];

export {
  categories,
  diagnosticsAndTests,
  onboarding,
  notifications,
  availableHours,
};
