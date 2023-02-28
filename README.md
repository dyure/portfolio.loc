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

17 feb 2023*********************************************************************************************
Создание страницы Skills
создать модель: php artisan make:model Skill -m
дополнить файл /database/migrations/...skills_table.php полями и выполнить миграцию: php artisan migrate (!)
создать фабрику php artisan make:factory SkillFactory
скорректировать файл /database/seeders/DatabaseSeeder.php и запустить команду php artisan db:seed (!)
создать контроллер: php artisan make:controller API/SkillController

20 feb 2023*********************************************************************************************
Skills - создание нового

21 feb 2023*********************************************************************************************
Skills - обновление и удаление
Создание страницы Educations
создать модель: php artisan make:model Education -m
дополнить файл /database/migrations/...education_table.php полями и выполнить миграцию: php artisan migrate
создать фабрику php artisan make:factory EducationFactory
скорректировать файл /database/seeders/DatabaseSeeder.php и запустить команду php artisan db:seed
создать контроллер: php artisan make:controller API/EducationController
Educations - создание нового
Educations - обновление и удаление

Создание страницы Experiences
создать модель: php artisan make:model Experience -m
дополнить файл /database/migrations/...experience_table.php полями и выполнить миграцию: php artisan migrate
создать фабрику php artisan make:factory ExperienceFactory
скорректировать файл /database/seeders/DatabaseSeeder.php и запустить команду php artisan db:seed
создать контроллер: php artisan make:controller API/ExperienceController

Experience - создание нового
Experience - обновление и удаление
Создание страницы Projects
создать модель: php artisan make:model Project -m
дополнить файл /database/migrations/...project_table.php полями и выполнить миграцию: php artisan migrate
создать фабрику php artisan make:factory ProjectFactory
скорректировать файл /database/seeders/DatabaseSeeder.php и запустить команду php artisan db:seed
создать контроллер: php artisan make:controller API/ProjectController

22 feb 2023*********************************************************************************************
Project - создание нового
Project - обновление и удаление

23 feb 2023*********************************************************************************************
Создание страницы Testimonial
создать модель: php artisan make:model Testimonial -m
дополнить файл /database/migrations/...testimonial_table.php полями и выполнить миграцию: php artisan migrate
создать фабрику php artisan make:factory TestimonialFactory
скорректировать файл /database/seeders/DatabaseSeeder.php и запустить команду php artisan db:seed
создать контроллер: php artisan make:controller API/TestimonialController

26 feb 2023*********************************************************************************************
Testimonial - создание нового
Testimonial - обновление и удаление

27 feb 2023*********************************************************************************************
Создание страницы Message
создать модель: php artisan make:model Message -m
дополнить файл /database/migrations/...messages_table.php полями и выполнить миграцию: php artisan migrate
создать фабрику php artisan make:factory MessageFactory
скорректировать файл /database/seeders/DatabaseSeeder.php и запустить команду php artisan db:seed
создать контроллер: php artisan make:controller API/MessageController

Message - изменение статуса и удаление

28 feb 2023*********************************************************************************************
Создание страницы Users
добавить поле Type к таблице Users: php artisan make:migration add_type_to_users_table
дополнить файл /database/migrations/...add_type_to_users_table.php полем Type и выполнить миграцию: php artisan migrate
добавить поле Bio к таблице Users: php artisan make:migration add_bio_to_users_table
дополнить файл /database/migrations/...add_bio_to_users_table.php полем Bio и выполнить миграцию: php artisan migrate
добавить поле Photo к таблице Users: php artisan make:migration add_photo_to_users_table
дополнить файл /database/migrations/...add_photo_to_users_table.php полем Photo и выполнить миграцию: php artisan migrate
создать контроллер: php artisan make:controller API/UserController

Users - создание нового
Users - обновление и удаление
