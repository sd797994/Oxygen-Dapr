kubectl delete -f start-dapr.yaml
set /p mode=
if %mode% == 1 ( 
cd Client
rd /S /Q pub
dotnet publish -c Release -o pub
docker build . -t oxygen-dapr-sample-client:latest
cd ../Server
rd /S /Q pub
dotnet publish -c Release -o pub
docker build . -t oxygen-dapr-sample-server:latest
cd ../
kubectl delete -f start-dapr.yaml
kubectl apply -f start-dapr.yaml
) ^
else ( 
cd Client
rd /S /Q pub
dotnet publish -o pub
docker build . -t oxygen-dapr-sample-client:latest -f Dockerfile.Debug
cd ../Server
rd /S /Q pub
dotnet publish -o pub
docker build . -t oxygen-dapr-sample-server:latest -f Dockerfile.Debug
cd ../
kubectl delete -f start-dapr-debug.yaml
kubectl apply -f start-dapr-debug.yaml
)