# Student List Backend with Node

This application allows users to create and maintain a list of students. Please visit
https://github.com/OC-ComputerScience/student-frontend-JS for the JavaScript frontend repository,
https://github.com/OC-ComputerScience/student-frontend-vue2 for the Vue 2 frontend repository, or https://github.com/OC-ComputerScience/student-frontend-vue3 for the Vue 3 frontend repository.

### Table of Contents
[Project Setup for your Local Machine](#project-setup-for-your-local-machine)</br>
[Project Setup for your AWS Instance](#project-setup-for-your-aws-instance)

## Project Setup for your Local Machine

#### Please note that you will need to create a database and be able to run it locally.

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
    - Edit the **configuration** file, labeled **httpd.conf**. 
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
    - Import the **student.sql** file from this repository into the database.

6. Compile and run the project locally.
```
npm run start
```

7. Check the corresponding **frontend repositories** for the correct URL to use to test your project.

## Project Setup for your AWS Instance
1. Make a **nodeapps** directory in your home directory on your AWS instance with the following three commands.

```
cd ~
```

```
mkdir nodeapps
```

```
cd nodeapps
```

2. Clone the project into your new **nodeapps** directory.
```
git clone https://github.com/OC-ComputerScience/student-backend.git
```

3. Update your **MySQL password** in the **server.js** file.
    - Open your **server.js** file with the following two commands.

    ```
    cd student-backend
    ```

    ```
    nano server.js
    ```

    - Using your **arrow keys**, find the **MySQL connection**.
    
    ```
    res.locals.connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'student'
    ```
    
    - On the line that says `password : ''`, enter your **MySQL password** between ''.
    - Press **Control** and **X** on your keyboard.
    - Press **Y**.
    - Press **Enter**.

4. Install the project with the following command.
```
npm install
```

5. Make the backend Node app run as a **service**.
    - We run our app as a service that will auto restart if it fails.  
    - We provided a service file for this project.
    - Run the following command to start the service.

```
sudo systemctl start student-backend
```

6. Enable required **Apache modules** with the following two commands.
```
sudo a2enmod proxy
```

```
sudo a2enmod proxy_http
```

7. Configure **Apache** to point to **Node** for API requests.
    - Open the configuration file with the following command.

    ```
    sudo nano /etc/apache2/sites-enabled/000-default.conf
    ```

    - Find `</Virtual Host>`.
    - **Before** it, add the following:

    ```
    <Proxy *>
        Order deny,allow
        Allow from all
    </Proxy>

    ProxyRequests Off
    ProxyPass /api http://localhost:3000/api
    ```
    
    - Press **Control** and **X** on your keyboard.
    - Press **Y**.
    - Press **Enter**.
    - Restart Apache with the following command.

    ```
    sudo /etc/init.d/apache2 restart
    ```

8. Update the **PHP config** to allow loading of big files. 
    - Get to your **php.ini** file with the following command.

    ```
    cd /etc/php/8.1/apache2/
    ```

    - **Note**: the above command may give an error that says **directory not found**.
    - If that happens, run these two commands:

    ```
    cd /etc/php
    ```
    ```
    ls
    ```

    - It should display the name (number) of the **current php version directory**, so you should replace the **8.1** with that number.

    ```
    cd ?.?/apache2/
    ```

    ```
    sudo nano php.ini
    ```

    - Press **Command** and **W** on your keyboard to find the line quicker.
    - Type in **upload_max**.
    - Change the line to make the max **6M**.
     ```
     upload_max_filesize=6M
     ```
     
    - Press **Control** and **X** on your keyboard.
    - Press **Y**.
    - Press **Enter**.
    - Restart Apache with the following command.

    ```
    sudo /etc/init.d/apache2 restart
    ```

8. Make a **student** database on your **AWS instance**.
    - Go to http://**your instance**/phpmyadmin.
    - Create a database named **student**.
    - Import the **student.sql** file from this repository into the database.

9. Check the corresponding **frontend repositories** for the correct URL to use to test your project.
