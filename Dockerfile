FROM node:16-slim as development

WORKDIR /app

# copy package-lock.json and package.json to workdir
COPY package.json .
COPY package-lock.json .

RUN npm ci

# copy all the other files to workdir
COPY . .

RUN npm run build

FROM node:16-slim as production

ENV NODE_ENV production

COPY --from=development /app/public ./public
COPY --from=development /app/package.json ./package.json
COPY --from=development /app/.next/standalone ./
COPY --from=development /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
