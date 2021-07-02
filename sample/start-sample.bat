kubectl delete -f start-dapr.yaml
set /p mode=
if %mode% == 1 ( 
cd Client
rd /S /Q pub
dotnet clean
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
cd ../
dotnet clean
dotnet build Oxygen.sln
cd sample/Client
docker build . -t oxygen-dapr-sample-client:debug -f Dockerfile.Debug
cd ../Server
docker build . -t oxygen-dapr-sample-server:debug -f Dockerfile.Debug
cd ../
kubectl apply -f start-dapr-debug.yaml
)
docker system prune -f
kubectl get po -w