# Use the official PostgreSQL image as a base
FROM postgres:latest

# Set environment variables if needed
ENV POSTGRES_DB=breach
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin

# Copy initialization scripts (if any)
COPY ./init.sql /docker-entrypoint-initdb.d/
