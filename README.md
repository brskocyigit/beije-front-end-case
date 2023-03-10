<h1 align="center">Beije Front-end Case</h1>

<br />

Bu proje beije Software Development Intern Case kapsamında yapılmıştır.\
Projede custom-packet, login, sign-in ve cart sayfaları hazırlanmıştır.\
Diğer sayfalar linklerle yönlendirilmiştir.\
Projede amaç custom-packet sayfasındaki 3 farklı ürüne\
ait sliderdan gelen verileri yanındaki paket bilgilerine yansıtmak\
ve sayfayı responsive hale getirmek.
Projede stillendirme için 'Tailwind' ve state yönetimi için 'Redux' kullandım.\
Projede yaptığım her adımı farklı 'branch'lara böldüm.Adımlarımı izlemek isterseniz\
branchlarımı sırasıyla inceleyebilirsiniz. master(navbar)->footer->modal->main-section->final\
Projede ChatGPT'den Slider kısmında sayfayı yenilerken değerlerimin kaybolmasını engellemek için\
yardım aldım.Bunu ayrı bir giste ekledim.Teşekkürler!

<br />

# 🚀 Available Scripts

Projeyi başlatmak için öncelikle node_modules indirilmelidir.

<br />

# install

```
npm install
```
Daha sonra uygulamayı başlatın.

## ⚡️ start

```
npm start
```

or

```
yarn start
```

Projeyi geliştirici modunda çalıştırın.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br />

# 🧬 Project structure

This is the structure of the files in the project:

```sh
    │
    ├── public                  # public files (favicon, .htaccess, manifest, ...)
    ├── src                     # source files
    │   ├── components
    │   ├── pages
    │   ├── resources           # images, constants and other static resources
    │   ├── store               # Redux store
    │   │   ├── actions         # store's actions
    │   │   └── reducers        # store's reducers
    │   ├── styles
    │   ├── tests               # all test files
    │   ├── types               # data interfaces
    │   ├── utility             # utilities functions and custom components
    │   ├── App.tsx
    │   ├── index.tsx
    │   ├── react-app-env.d.ts
    │   ├── RootComponent.tsx   # React component with all the routes
    │   ├── serviceWorker.ts
    │   └── setupTests.ts
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── package.json
    ├── README.md
    └── tsconfig.json
```


