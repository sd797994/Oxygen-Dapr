from mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY /pub .
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
ENTRYPOINT ["dotnet", "Server.dll"]