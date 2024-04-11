FROM nodejs:latest as builder

COPY . .
RUN corepack enable pnpm \
  && pnpm i\
  && pnpm b

FROM nginx:alpine

COPY --from=builder .vitepress/dist /usr/share/nginx/html/

EXPOSE 80
