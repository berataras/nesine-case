# Nesine Case

Live: [http://nesine.berataras.com](http://nesine.berataras.com/)

- create-react-app kullanılmadı. Proje webpack ile sıfırdan oluşturuldu.
- State yönetimi için Context API kullanıldı.
- Unit test için Jest kullanıldı.
- data’lar 10-10 çekilecek şekilde **load more eklendi.**
- responsive çalışıldı.

### Proje iki şekilde başlatılabilir:

CSR (Client-side rendering)

```html
npm run start
```

SSR (Server-side rendering)

```html
npm run dev
```

Server-side rendering için nodeJs’in framework’ü olan express’i kullandım. app.get içerisinde build aldığım index.html dosyamı okuduktan sonra, `renderToString` ile App component’ımı string’e dönüştürdüm. Dönüştürdüğüm App’i index.html’de id=”app” div’ini replace ederek içerisine ekledim. Son olarak 8000 portunda başlattım.

Build aşamasındaki config’ler için ssr tarafında webpack.server, csr tarafında ise webpack.config dosyalarını oluşturdum.
