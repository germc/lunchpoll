Friday Lunch Poll
=========

Our aim is to create the best online polling and chat system the Friday lunch has ever seen.

##Suggested Features

###User Facing
* Login or Create Account
* Add Restaurant to Eat
	* From History
	* New Restaurant
* Vote up and down an existing restaurant
	* I would argue for voting down for the cases like: "I would eat anywhere except X", that way you could actually mark down the X if you would be content with anything else winning, just not that.
* See real-time restaurant standings
	* We could do some pretty cool designs with showing a currently *winning* restaurant 
* Weekly thread discussion of lunch plans
	* Facebook-thread-ish?

### Misc Features
* **Potentially out of scope but super cool**: A way to organize rides. A user could declare the building they are in, number of seats they have, and join up with others for rides.
* Create the discussion thread weekly around 11:00 a.m.?
* Push notification when the deadline has been reached and maybe even send out an email to the group?



##Object breakdown
Note: Totally realize you'll do this better than I. Also, do we want to use something like Parse or just have you roll our own? Benefits I can see with using parse: built in APN (Apple Push Notification) support.


###Restaurant

* Name
* Food Category/Type
* Address
* Website
* Weeks
	* Votes Up
	* Votes Down

###Person

* Name
* Email (Apple?)
* Password
* Usually have a Car Y/N?
* Usual Building?