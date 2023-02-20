10 feb 2023*********************************************************************************************
Учебный пример (https://www.youtube.com/watch?v=okMYgBf7LaE&list=PLaXLjtW0Px1p_ecXxHy4Qdumib7nLCwlO&index=2)
Установка ларавел:
cd ~/sites
composer create-project laravel/laravel portfolio.loc

Проверка:
php artisan serve

Создание БД:
mysql -u root -p
набрать пароль
CREATE DATABASE portfolio;
GRANT ALL PRIVILEGES ON portfolio.* TO 'portfolio_user'@'localhost' IDENTIFIED BY 1234Aa;
FLUSH PRIVILEGES;

Занести данные о БД в файл .env

Установка vue
npm install vue-loader@next vue@next vue-router@next

Установка плагина vite для vue:
npm i @vitejs/plugin-vue --force --save-dev

В файле vite.config,js добавить строку "import vue from '@vitejs/plugin-vue';" и в разделе "export default" добавить строку "vue(),"

В каталоге resources/js/ создаем каталог components, а в нем файл app.vue

12 feb 2023*********************************************************************************************
to fix Error: laravel.log could not be opened
sudo chmod -R 775 storage
sudo chown -R $USER:www-data storage

Установка БД
создать БД
прописать настройки подключения в файле .env
запустить команду: php artisan migrate

Создание модуля авторизации
убедиться в наличии компонента "laravel/sanctum" в файле composer.json
в разделе "app" файла /app/Http/Kernel.php разкомментировать строку с классом "sanctum"
создать контроллер: php artisan make:controller API/AuthController

13 feb 2023*********************************************************************************************
Создание страницы About
php artisan make:model About -m
дополнить файл /database/migrations/...abouts_table.php полями и выполнить миграцию: php artisan migrate
создать контроллер: php artisan make:controller API/AboutController
установить sweetalert2 компонент: npm install sweetalert2
установить intervention/image: composer require intervention/image
создать каталог /public/img/upload и изменить права и владельца этих каталогов (см. записи от 12 февраля)
Ошибки:
1. в контроллере AboutController.php не работает проверка на существование загруженного файла и поэтому отключена. загрузка файла, при этом работает.
2. обновление остальных полей работает только если выбрать фото и cv

15 feb 2023*********************************************************************************************
Создание страницы Service
создать модель: php artisan make:model Service -m
дополнить файл /database/migrations/...services_table.php полями и выполнить миграцию: php artisan migrate (!)
создать фабрику php artisan make:factory ServiceFactory
скорректировать файл /database/seeders/DatabaseSeeder.php и запустить команду php artisan db:seed (!)
создать контроллер: php artisan make:controller API/ServiceController
Ошибки:
1. В файле /resources/components/admin/services/index.vue строка 145 - v-if компонент не работает вместе с v-for компонентом.
2. В файле /resources/components/admin/services/index.vue строка 170 - не срабатывает условный оператор. Так что все время вызывается функция updateService()

17 feb 2023*********************************************************************************************
Создание страницы Skills
создать модель: php artisan make:model Skill -m
дополнить файл /database/migrations/...skills_table.php полями и выполнить миграцию: php artisan migrate (!)
создать фабрику php artisan make:factory SkillFactory
скорректировать файл /database/seeders/DatabaseSeeder.php и запустить команду php artisan db:seed (!)
создать контроллер: php artisan make:controller API/SkillController

20 feb 2023*********************************************************************************************
Skills - создание нового
