from twilio.rest import TwilioRestClient

account_sid = "AC9445ee82c7dc710745168742c8d3aa78" # My Account SID from www.twilio.com/console
auth_token  = "42b6698f202fe43f70b29e8bd5e901c6"  # My Auth Token from www.twilio.com/console

client = TwilioRestClient(account_sid, auth_token)

message = client.messages.create(body="Hello from Python",
    to="+15039262778",    # My (Valerie's) phone number
    from_="+19803524225 ") # My Twilio number

print(message.sid)