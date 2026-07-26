import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  USER: '@elearning_user',
  PROGRESS: '@elearning_progress',
  TASKS: '@elearning_tasks',
};

export const DUMMY_MATKUL = [
  {
    id: '1',
    code: 'INF101',
    name: 'Pemrograman Mobile',
    dosen: 'Dr. Budi Santoso, M.Kom',
    schedule: 'Senin, 08:00 - 10:30',
    description: 'Mempelajari dasar pembuatan aplikasi Android & iOS menggunakan React Native dan Expo.',
    totalMateri: 4,
  },
  {
    id: '2',
    code: 'INF102',
    name: 'Basis Data Lanjut',
    dosen: 'Siti Aminah, M.T',
    schedule: 'Selasa, 10:30 - 13:00',
    description: 'Perancangan basis data relasional, pengoptimalan SQL query, dan dasar-dasar NoSQL database.',
    totalMateri: 3,
  },
  {
    id: '3',
    code: 'INF103',
    name: 'Desain Antarmuka (UI/UX)',
    dosen: 'Rian Pratama, M.Ds',
    schedule: 'Rabu, 13:00 - 15:30',
    description: 'Pengenalan prinsip UX design, wireframing, dan pembuatan interaktif prototype menggunakan Figma.',
    totalMateri: 5,
  },
];

export const saveUser = async (user) => {
  await AsyncStorage.setItem(KEYS.USER, JSON.stringify(user));
};

export const getUser = async () => {
  const data = await AsyncStorage.getItem(KEYS.USER);
  return data ? JSON.parse(data) : null;
};

export const clearUser = async () => {
  await AsyncStorage.removeItem(KEYS.USER);
};

export const getProgress = async () => {
  const data = await AsyncStorage.getItem(KEYS.PROGRESS);
  return data ? JSON.parse(data) : {};
};

export const saveProgress = async (progress) => {
  await AsyncStorage.setItem(KEYS.PROGRESS, JSON.stringify(progress));
};

export const getTasks = async () => {
  const data = await AsyncStorage.getItem(KEYS.TASKS);
  return data ? JSON.parse(data) : [];
};

export const saveTask = async (task) => {
  const current = await getTasks();
  const updated = [task, ...current];
  await AsyncStorage.setItem(KEYS.TASKS, JSON.stringify(updated));
  return updated;
};