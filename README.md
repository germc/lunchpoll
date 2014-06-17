Friday Lunch Poll
=========

Our aim is to create the best online polling and chat system the Friday lunch has ever seen. Amen!
http://fridaylun.ch — So, that just happened.

##Suggested Features

###User Facing
* Login or Create Account
	• Invitation system to better manage the group? Only current members can send out invitations to new members.
	• Keep user permanently logged in on device to minimize UX friction.
* Add Restaurant to Poll
	* From History
	* New Restaurant
* Vote up an existing restaurant
	* Or what if it was a feature that could turn itself on if the deadline is close and there's a tie? — that could be overkill, and confusing, but just another idea
* See real-time restaurant standings
	* We could do some pretty cool designs with showing a currently *winning* restaurant 
* Weekly thread discussion of lunch plans
	* Facebook-thread-ish?

### Misc Features
* A way to organize rides. A user could declare the building they are in, number of seats they have, and join up with others for rides.
* Create the weekly poll automatically around 11:00 a.m.
	• But we're more likely to forget to turn it off on a holiday than we are to remember to turn it on
	• It removes the personal touch of being invited by a friend, rather than invited by a machine
* Push notification when the deadline has been reached and maybe even send out an email to the group?
	• A time parameter for each poll that shuts down the poll 15 minutes beforehand and alerts everyone. Noon is default, but can be customized as needed.
	• User preference to turn types of alerts on and off (email, push notification)
• Statistics (next to each stat could be an "add to current poll" button)
	• Most/Least frequent winners
	• Most/Least voted for overall
	• Most/Least active voters
	• Most/Least recent restaurants
	• Most/Least frequent food genres
	• Most/Least frequently appears in polls

##Object breakdown
Note: Totally realize you'll do this better than I. Also, do we want to use something like Parse or just have you roll our own? Benefits I can see with using parse: built in APN (Apple Push Notification) support.

###Restaurant
	* Name (String)
	* Food Genre (String)
	* Address (String / Apple Maps URL)
	* Website (String)
	* Total Wins (Integer)
	* Total Votes (Integer)

###Person
	* Name (String)
	* Email (String)
	* Password (String)
	* Phone # (String)
	* Usual Building? (String)
	* Have Car (Bool)
	
###Poll
	* Title (String) — Default: Date
	* Lunchtime (Date) — Default: Noon
	* Restaurants (Array)
		• Restaurant (Object)
		• Votes (Integer)
	* Rides (Array)
		• Person (Object)
		• Seats (Array)
			• Person (Object)
	* Chats (Array)
		• Person (Object)
		• Message (String)
		• Timestamp (Date)
