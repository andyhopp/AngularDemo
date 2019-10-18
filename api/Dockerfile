FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS builder
WORKDIR /src
COPY ./ /src
RUN dotnet publish -c Release -r linux-x64 -o /app

FROM amazonlinux:latest as production
WORKDIR /app
COPY --from=builder /app .
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT 1

RUN /bin/bash -c 'chmod +x Demo.Api'

# Optional: Set this here if not setting it from docker-compose.yml
# ENV ASPNETCORE_ENVIRONMENT Development

ENTRYPOINT ["/app/Demo.Api"]
