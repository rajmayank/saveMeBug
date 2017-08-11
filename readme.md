# saveMeBug - A `IFTTT` task using webtask.io to save you from those awkward situations
> The only time you'll be happy that a very business critical hot-fix bug that'll ruin your weekend was reported

## Purpose
It's a normal group party and you're having a great time, suddenly **`someone`** shows up who makes the scene awkward. Now you're looking for ways to get out of the place and not sound rude at the same time. The old tricks of shaking the phone twice and receiving a pre configured SMS/Call is now way to common.

Well being a developer has it's benifit and everyone knows that a high business priority bug has to be answered no matter what. So we'll create a bug to get us out of the situation !

> This was a small project to test out how easy is it to create IFTTT task and also learning more about webtask.io. I'm writing a blog post explaining each step and how these two awesome technologies integrate with each other.


## Setup
````sh
$ # Clone the repo
$ git clone

$ # Install webtask.io CLI and initialize your task
$ npm install wt-cli -g
$ wt init <email-id>

$ # Create your webtask with the `secrets` like your slack channel ID/HipChat room ID and authentication token
$ wt create saveMeBug.js \
--name saveMeBug \
--secret target=slack \
--secret token=xoxp-XXXXXXXXXXXX-XXXXXXXXXXXX-XXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX \
--secret channelid=XXXXXXXXX \
--secret username='@mayank9856' \
--secret message='marketing team has filed a hotfix bug with priority status "urgent (High Business Priority)". Please look into the issue at the earliest'
# OR for hipchat
$ wt create saveMeBug.js \
--name saveMeBug \
--secret target=hipchat \
--secret url=https://XYZ.hipchat.com/v2/room/XXXXXXX/notification?auth_token=XXXXXXXXXXXXXXXXXXXXXXXXXX \
--secret username='@mayank9856' \
--secret message='marketing team has filed a hotfix bug with priority status "urgent (High Business Priority)". Please look into the issue at the earliest'

$ # Create a IFTTT task and point it to the above mentioned task. We're all set!!
````

For the IFFT task use `Google Assistant` as the `IF` trigger and voice such as 'can you please $' , 'can you make sure $' and 'please make sure $' and for the `that` trigger create a webhook and link the URL endpoint you get from webtask.io
NOTE: `$` in the command means any text.

## Usage

IFTTT would trigger a webtask when you say anything that starts with :
* **Can you please** make sure that the phone is on silent for next two hours
* **Can you please** give me weather information for tonight
* **Please make sure** that the lights in my room are switched off

These commands are pretty simple and there is a very thin chance that you would ever need to request Google for anything in this manner, so you can be sure that the task is triggered in only 'emergency' cases
With all our setup done, whenever you politely ask google for anything it would send a request to the API endpoint provided by webtask.io which would then send a message to slack or hipchat. All you need to do is sound shocked, worried and responsible at the same time and rush back to fix the bug !!


