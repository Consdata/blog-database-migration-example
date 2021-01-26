FROM flyway/flyway:7.5.0

USER 101

RUN echo "" >> /flyway/conf/flyway.conf \
 && echo "flyway.url=jdbc:postgresql://db-flyway-migration-postgres:5432/my_db" >> /flyway/conf/flyway.conf \
 && echo "flyway.user=my_db" >> /flyway/conf/flyway.conf \
 && echo "flyway.password=password" >> /flyway/conf/flyway.conf

COPY --chown=101 db/changelogs /flyway/sql

CMD ["migrate"]