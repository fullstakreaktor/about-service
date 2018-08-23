FROM postgres:alpine

ENV POSTGRES_PASSWORD=''
ENV POSTGRES_DB=aboutInfo
ENV POSTGRES_USER=gauravgulati

COPY csvFiles/host/ /csvFiles/host/
COPY csvFiles/listings/ /csvFiles/listings/
COPY csvFiles/ratings/ /csvFiles/ratings/

ADD postgSchema.sql /docker-entrypoint-initdb.d

EXPOSE 5432