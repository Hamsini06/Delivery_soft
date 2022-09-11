# Delivery_soft

The users are initially welcomed to the homepage showing about the website and how it can be used or navigated through.
Then the users are requested to enter their mobile number. Now this information will be checked against the mongodb database called digi_users created remotely which stores a bunch of user data like their mobile, store name, order number and the status of the item
Once the entered number is confirmed against the database, the users are navigated to the next page where all the available stores with their registered number is displayed along with a table showing all the orders they've done
THe users can navigate further by clicking on the "pending" status against their orders where they find a table full of pending order ('not been delivered yet'). Here the users can give their delivery information which includes address, time slot and tip. This information is again posted into a mongodb database created remotely where the information is stored for future purposes. Once the user hits submit, they get an alert informing that the product is sent for delivery successfully.

All the code is provided within this repository.
backend heavily utilized working with node, express, mongo and using ejs, javascript to communicate between the two.
