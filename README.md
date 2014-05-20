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
* Vote up and down an existing restaurant
<<<<<<< HEAD
	* I would argue for voting down for the cases like: "I would eat anywhere except X", that way you could actually mark down the X if you would be content with anything else winning, just not that.
	• The group had this discussion once. The general consensus seemed to be against the down-vote. But I'm not opposed to re-visiting the idea.
		• Or what if it was a feature that could turn itself on if the deadline is close and there's a tie? — that could be overkill, and confusing, but just another idea
=======
	* I would argue for voting down for the cases like: "I would eat anywhere except X", that way you could actually mark down the X if you would be content with anything else winning, just not that. However, Reed suggested that downvoting could actually be detrimental to the voting process. (see https://medium.com/the-physics-arxiv-blog/aad9d49da238)
>>>>>>> FETCH_HEAD
* See real-time restaurant standings
	* We could do some pretty cool designs with showing a currently *winning* restaurant 
* Weekly thread discussion of lunch plans
	* Facebook-thread-ish?

### Misc Features
* **Potentially out of scope but super cool**: A way to organize rides. A user could declare the building they are in, number of seats they have, and join up with others for rides.
	• Cool idea! Let's do it!
* Create the discussion thread weekly around 11:00 a.m.?
	• Why does it need a start time? Can the discussion thread just exist alongside the poll kindof like it already is?
* Push notification when the deadline has been reached and maybe even send out an email to the group?
	• Yes. I had the same thought.
	• A time parameter for each poll that shuts down the poll 15 minutes beforehand and alerts everyone. Noon is default, but can be customized as needed.
	• User preference to turn types of alerts on and off (email, push notification)
• Statistics to show most frequent winners, most active voters, most recent restaurants, etc.


##Object breakdown
Note: Totally realize you'll do this better than I. Also, do we want to use something like Parse or just have you roll our own? Benefits I can see with using parse: built in APN (Apple Push Notification) support.
	• I had never heard of Parse before, but it looks super slick. Let's try it. It should save oodles of time.

###Restaurant
	* Name (String)
	* Food Category/Type (String)
	* Address (String)
	* Website (String)

###Person
<<<<<<< HEAD
	* Name (String)
	* Email (String)
	* Password (String)
	* Usual Building? (String)
	
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
	
=======

* Name
* Email (Apple?)
* Password
* Usually have a Car Y/N?
* Usual Building?
>>>>>>> FETCH_HEAD
