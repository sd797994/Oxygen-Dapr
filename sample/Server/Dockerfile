from mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY /pub .
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
ENTRYPOINT ["dotnet", "Server.dll"]