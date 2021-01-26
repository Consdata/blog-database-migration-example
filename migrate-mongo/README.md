
```
eval $(minikube -p minikube docker-env)

pushd v1/docker
docker build -t example-migrate-mongo-database-migration:v1 .
popd

pushd v2/docker
docker build -t example-migrate-mongo-database-migration:v2 .
popd


kubectl apply -f base-kubernetes


kubectl apply -f v1/kubernetes

kubectl apply -f v2/kubernetes

```