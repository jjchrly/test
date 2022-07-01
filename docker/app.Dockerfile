FROM node:14.19.3-alpine
 
ENV HOME=/server
RUN adduser -D -h $HOME -s /bin/false app
 
COPY node_modules $HOME/node_modules/
COPY index.js $HOME/
 
WORKDIR $HOME
 
EXPOSE 8888
CMD [ "node", "--max-http-header-size", "64000", "index.js" ]
USER app