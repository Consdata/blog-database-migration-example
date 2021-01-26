FROM node:15

RUN npm install -g migrate-mongo

COPY db/migrations /opt/mongo-migrate-workdir/migrations
COPY db/migrate-mongo-config.js /opt/mongo-migrate-workdir/

USER 1001

WORKDIR "/opt/mongo-migrate-workdir"
ENTRYPOINT ["migrate-mongo"]
CMD ["up"]
