import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path'; // Импортируем модуль path
import dotenv from 'dotenv'; // Импортируем dotenv
import fetch from 'node-fetch'; // Импортируем node-fetch

// Загружаем переменные окружения из .env файла
dotenv.config();

// Получаем путь к текущему модулю
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Конфигурация вашего Firebase проекта
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

// Инициализация приложения Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Получаем доступ к хранилищу

async function downloadFiles(folderRef, downloadDir) {
  const result = await listAll(folderRef); // Получаем все файлы и папки в текущем каталоге

  // Создаем директорию для текущего уровня, если она не существует
  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
  }

  // Скачиваем все файлы на текущем уровне
  for (const fileRef of result.items) {
    const filePath = path.join(downloadDir, fileRef.name); // Полный путь для сохранения файла
    const url = await getDownloadURL(fileRef); // Получаем URL для скачивания
    const response = await fetch(url); // Загружаем файл по URL

    // Получаем массив байтов из ответа
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer); // Преобразуем ArrayBuffer в Buffer

    fs.writeFileSync(filePath, buffer); // Сохраняем файл
    console.log(`Downloaded ${fileRef.name}`);
  }

  // Рекурсивно обходим все папки
  for (const folderRef of result.prefixes) {
    const folderPath = path.join(downloadDir, folderRef.name); // Путь для сохранения папки
    await downloadFiles(ref(storage, folderRef.fullPath), folderPath); // Рекурсивный вызов для папки
  }
}

async function startDownload() {
  const rootRef = ref(storage, ''); // Получаем ссылку на корень хранилища
  const downloadDir = path.join(__dirname, 'img'); // Указываем путь к директории img
  await downloadFiles(rootRef, downloadDir); // Запускаем скачивание
}

startDownload().catch(console.error);
