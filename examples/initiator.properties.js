# default settings for sessions
[DEFAULT]
ConnectionType=initiator
FileStorePath=./examples/data
FileLogPath=./examples/log
BeginString=FIX.4.4
UseDataDictionary=Y
DataDictionary=./quickfix/spec/FIX44.xml

[SESSION]
SocketConnectHost=127.0.0.1
SocketConnectPort=9999
TargetCompID=ACCEPTOR
SenderCompID=INITIATOR
StartTime=00:00:00
EndTime=23:00:00
HeartBtInt=30
