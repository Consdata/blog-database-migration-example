FROM mybatis/migrations:3.3.9

USER 0

RUN mkdir -p /example-migration/environments /example-migration/drivers \
 && wget -P /example-migration/drivers/ https://repo1.maven.org/maven2/org/postgresql/postgresql/42.2.18/postgresql-42.2.18.jar \
 && echo "time_zone=GMT+1:00" >> /example-migration/environments/development.properties \
 && echo "send_full_script=true" >> /example-migration/environments/development.properties \
 && echo "delimiter=;" >> /example-migration/environments/development.properties \
 && echo "full_line_delimiter=false" >> /example-migration/environments/development.properties \
 && echo "auto_commit=false" >> /example-migration/environments/development.properties \
 && echo "ignore_warnings=true" >> /example-migration/environments/development.properties \
 && echo "changelog=CHANGELOG" >> /example-migration/environments/development.properties \
 && echo "" >> /example-migration/environments/development.properties \
 && echo "driver=org.postgresql.Driver" >> /example-migration/environments/development.properties \
 && echo "" >> /example-migration/environments/development.properties \
 && echo "url=jdbc:postgresql://db-mybatis-migration-postgres:5432/my_db" >> /example-migration/environments/development.properties \
 && echo "username=my_db" >> /example-migration/environments/development.properties \
 && echo "password=password" >> /example-migration/environments/development.properties \
 && chown -R 101 /example-migration

COPY --chown=101 db/scripts /example-migration/scripts

USER 101
WORKDIR "/example-migration"
CMD ["up"]