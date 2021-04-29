Back End

MongoDB - Database Implementation 

Originally, we followed the worksheets proivided which led to us integrating a local Mongo database. However, due to several discussions we thought it would be easier to opt for an account with Mongo. The main reason for this is because this meant matches would be retained in between builds and would lead to less issues when different users were interacting with the system at the same time. We had two collections (databases) - 1) User Login Details and 2) User Personal Details. We understand this is not the most secure system, however this is discussed further in our social and ethical discussion (hyperlink here). We altered some of the files that linked our application to a local Mongo database and connected it to our database in the cloud. We wrote our schema and then started creating documents based on this. The registration process also became a lot more streamlined and efficient when we implemented this system. Typeform and some middleware (Andreas) meant once the registration process was complete and submitted this would automatically create two documents in the Mongo space. We would store the email and password in the login details collection and then the rest of the data obtained in the personal details collection. The details for the MongoDB account can be emailed to you if required.

Data Model

Through the data model documentation (link here), you can see that we have transitioned through various different schemas and data models. We ended up trying to pick something quite simple, since we knew our project was already going to be difficult to create. We initally wanted to use the "id" variable that is automatically generated as a way to call each user profile, however we realised that when we were creating these documents, the "id" was not the same for both of the documents created upon registaration. We then opted to change our data model and include "email" in both documents creating a foreign key that we could use to find the correct corresponding data. With the data model, we had a field for images, so for some of the images we had null if no image was stored and then stored the image as a string via accessing our online database. This was done for some of the pre-loaded up users, however we also had some users that uploaded their images through the typeform registration service we had provided. This image would then stored as binary, however our code was versatile enough to cope with this and still presented the images in the way that we wanted. 