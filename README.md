# about-service

Get Requests to Hosts Database

curl -H "Content-Type: application/json" -X GET -d '{"id":"5000001"}' http://localhost:3003/api/listings/:id

Put Requests

curl -H "Content-Type: application/json" -X PUT -d '{"id":"3420", "things_to_do":"canoeing"}' http://localhost:3003/api/listings/:id/update

Post Requests

curl -H "Content-Type: application/json" -X POST -d '{"id":"999941", "features":"beaches", "things_to_do":"surfing", "lat_location":"-57.4345", "lon_location":"117.5433"}' http://localhost:3003/api/listings/new

Delete Requests

curl -H "Content-Type: application/json" -X DELETE -d '{"id":"9000001"}' http://localhost:3003/api/listings/:id/delete
