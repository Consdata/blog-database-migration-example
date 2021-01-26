FROM liquibase/liquibase:4.1.1

USER root
RUN chown liquibase:liquibase -R /liquibase/classpath /liquibase/changelog
USER 1001

RUN echo "url: jdbc:postgresql://db-liquibase-migration-postgres:5432/my_db" >> /liquibase/liquibase.docker.properties \
 && echo "changeLogFile: db.changelog-main.xml" >> /liquibase/liquibase.docker.properties \
 && echo "username: my_db" >> /liquibase/liquibase.docker.properties \
 && echo "password: password" >> /liquibase/liquibase.docker.properties

COPY db/changelogs /liquibase/changelog

CMD ["update"]