# Student List Backend with Node

This application allows users to create and maintain a list of students. Please visit https://github.com/OC-ComputerScience/student-frontend-vue2 for the Vue 2 frontend repository or https://github.com/OC-ComputerScience/student-frontend-vue3 for the Vue 3 frontend repository.

#### Please note:
- You will need to create a database and be able to run it locally.

## Project Setup for your Local Machine
1. Clone the project into your **XAMPP/xamppfiles/htdocs/studentapp** directory.
```
git clone https://github.com/OC-ComputerScience/student-backend.git
```

2. Install the project.
```
npm install
```

3. Configure **Apache** to point to **Node** for API requests.
    - We recommend using XAMPP to serve this project.
    - In XAMPP, find the **Edit/Configure** button for **Apache**.
    - Edit the **conf** file, labeled **httpd.conf**. 
    - It may warn you when opening it but open it anyway.
    - Add the following line as the **last line**:
    
    ```
    ProxyPass /api http://localhost:3000/api
    ```

    - Find the following line and remove the **#** at the front of the line.
    
    ```
    LoadModule proxy_http_module modules/mod_proxy_http.so
    ```
    
    - Save the file and exit XAMPP.

4. Update the **PHP config** to allow loading of big files. 
    - For Windows:
         - In XAMPP, find the **Edit/Configure** button for **Apache**.
         - Edit the **php** file, labeled **php.ini**. 
         - Use **Control** and **F** to find **upload_max_filesize**.
         - Make sure it is at least **6M**.
    - For Mac:
         - Use a Text Editor to edit **XAMPP/xamppfiles/etc/php.ini**.
         - Use **Command** and **F** to find **upload_max_filesize**.
         - Make sure it is at least **6M**.
     ```
     upload_max_filesize=6M
     ```
     - **Save** the file.
     - **Restart Apache** and exit XAMPP.

5. Make a local **student** database.
    - Go to http://localhost/phpmyadmin.
    - Create a database named **student**.
    - Import the **student.sql** file from this repo into the database.

6. Compile and run the application locally.
```
npm run start
```

7. Check the corresponding **frontend repositories** for the correct URL to use to test your application.

## Project Setup for your AWS Instance
1. Clone the project into your **XAMPP/xamppfiles/htdocs/studentapp** directory.
```
git clone https://github.com/OC-ComputerScience/student-backend.git
```

2. Install the project.
```
npm install
```

3. Configure **Apache** to point to **Node** for API requests.
    - We recommend using XAMPP to serve this project.
    - In XAMPP, find the **Edit/Configure** button for **Apache**.
    - Edit the **conf** file, labeled **httpd.conf**. 
    - It may warn you when opening it but open it anyway.
    - Add the following line as the **last line**:
    
    ```
    ProxyPass /api http://localhost:3000/api
    ```

    - Find the following line and remove the **#** at the front of the line.
    
    ```
    LoadModule proxy_http_module modules/mod_proxy_http.so
    ```
    
    - Save the file and exit XAMPP.

4. Update the **PHP config** to allow loading of big files. 
    - For Windows:
         - In XAMPP, find the **Edit/Configure** button for **Apache**.
         - Edit the **php** file, labeled **php.ini**. 
         - Use **Control** and **F** to find **upload_max_filesize**.
         - Make sure it is at least **6M**.
    - For Mac:
         - Use a Text Editor to edit **XAMPP/xamppfiles/etc/php.ini**.
         - Use **Command** and **F** to find **upload_max_filesize**.
         - Make sure it is at least **6M**.
     ```
     upload_max_filesize=6M
     ```
     - **Save** the file.
     - **Restart Apache** and exit XAMPP.

5. Make a local **student** database.
    - Go to http://localhost/phpmyadmin.
    - Create a database named **student**.
    - Import the **student.sql** file from this repo into the database.

6. Compile and run the application locally.
```
npm run start
```

7. Check the corresponding **frontend repositories** for the correct URL to use to test your application.
