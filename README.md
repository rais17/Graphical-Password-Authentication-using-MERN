# Graphical Password Authentication: A User-Friendly and Secure Approach

## Introduction
Graphical Password Authentication is a project developed as part of a college project to provide a user-friendly and secure alternative to traditional text-based passwords. This system utilizes the MERN (MongoDB, Express.js, React.js, Node.js) stack to create an intuitive and robust authentication solution. By leveraging images as graphical passwords, this project enhances security and improves the overall user experience.

## Project Overview
The project consists of two main functionalities: signup and login.

### Signup
During the signup process, users are required to provide their name, email, and a password in string format. Additionally, they have the opportunity to select an image category from the Unsplash API. The chosen image from the selected category serves as their graphical password. All the user data, including the chosen image and other relevant information, is securely stored in the MongoDB database.

### Login
When users attempt to log in, they are prompted to enter their email and password as usual. Once authenticated, they are presented with a page that displays several images, including their chosen image from the signup process. To gain access, users must correctly select their chosen image from the options provided. This graphical password approach adds an extra layer of security by making it harder for unauthorized individuals to guess or crack passwords.

## Technologies Used
The following technologies are utilized in this project:

- React.js: This frontend framework is used to create an intuitive and interactive user interface. It enables seamless navigation and enhances the overall user experience.

- Express.js: As a backend framework, Express.js facilitates routing and API integration. It handles the server-side logic required for authentication and image retrieval.

- MongoDB: This NoSQL database is employed to store user information and graphical passwords securely. It ensures scalability, flexibility, and efficient data management.

- Unsplash API: By integrating the Unsplash API, high-quality images are fetched based on user-selected categories. This feature allows users to personalize their graphical passwords with images of their choice, increasing user engagement and satisfaction.

## Advantages
The Graphical Password Authentication project offers several advantages:

- Enhanced Security: Graphical passwords are inherently more secure than text-based passwords since they are harder to guess or crack. By leveraging images, this project provides an added layer of protection for user accounts.

- Improved User Experience: Remembering complex passwords can be challenging for users. By using graphical passwords, which are easier to recall, the project reduces the likelihood of forgotten passwords and enhances the overall user experience.

- User Engagement: The integration of the Unsplash API enables users to select and personalize their graphical passwords with images they choose. This feature adds a level of customization and personalization, leading to increased user engagement.

- Scalability: The MERN stack, combined with MongoDB, provides a robust and scalable infrastructure for user authentication and data storage. It ensures that the project can handle a growing number of users and their associated data without compromising performance.

## License
The Graphical Password Authentication project is licensed under the [MIT License](LICENSE).

## Acknowledgments
We would like to acknowledge the contributions of the open-source community and the developers of the MERN stack, React.js, Express.js, and MongoDB, for providing the tools and frameworks that made this project possible.

## Contact
For any inquiries or questions regarding the Graphical Password Authentication project, please contact us at nehalarshad11@gmail.com

## College Project
This project was developed as part of a college project at [Your College Name]. The aim was to explore innovative authentication methods and create a user-friendly and secure solution using the MERN stack. The project demonstrates practical application of concepts learned during the course and showcases your ability to develop a real-world software application.

