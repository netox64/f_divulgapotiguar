# divulga_potiguar

<div align="center">
  <img src="https://github.com/netox64/f_divulgapotiguar/blob/main/docs/front2.png" width="250" height="250" />
  <img src="https://github.com/netox64/f_divulgapotiguar/blob/main/docs/front1.png" width="250" height="250" />
</div>

<h4 align="center">This project is a backend with logic related to the promotion of properties that are for sale in the designated region.</h4>

<p align="center">
<img src="https://sonarcloud.io/api/project_badges/measure?project=netox64_f_divulgapotiguar&metric=alert_status">
<img src="https://sonarcloud.io/api/project_badges/measure?project=netox64_f_divulgapotiguar&metric=coverage">
<img src="https://sonarcloud.io/api/project_badges/measure?project=netox64_f_divulgapotiguar&metric=duplicated_lines_density">
<img src="https://sonarcloud.io/api/project_badges/measure?project=netox64_f_divulgapotiguar&metric=security_rating">
<img src="https://sonarcloud.io/api/project_badges/measure?project=netox64_f_divulgapotiguar&metric=sqale_index">
</p>

<p align="center">
    <a href="#Technologies_Used">Technologies Used</a> •
    <a href="#Api_resources">Api resources</a> •
    <a href="#Folder_Architecture">Folder Architecture FrontEnd</a> •
    <a href="#Folder_Architecture">Folder Architecture BackEnd</a> •
    <a href="#Running_Application">Running application</a> •
    <a href="#About_the_Author">About the Author</a> •
    <a href="https://github.com/netox64/b_divulgapotiguar/blob/main/LICENSE">Licensing</a>
</p>

## Technologies_Used

- The following technologies were used in this project:
    - Next.js to build the frontend.

## Designer_basis_for_application

- [figma](https://www.figma.com/design/2flw1NCYRfBob1jQdt15Ea/anunciar_potiguar?node-id=0-1&t=4548e2NpDK2J3CeQ-1)

## Prerequisites

- Nodejs v 22
> [!IMPORTANT]
> create archive *_.env_* in folder root of project:

```
    NEXTAUTH_URL = http://localhost:3000
    NEXTAUTH_SECRET = secret
```

## Running_Application
- run
```
    npm i && npm run dev
```
- run storybook
```
    npm i && npm run storybook
```
- run tests
> [!WARNING]
> Before running the tests, it is important to follow the steps below.

- by default nextjs when modifying the _tsconfig.jon_ property to _"jsx": "preserve"_, as this determines how it compiles the jsx code, but the test libraries used here use another compilation pattern so we have to modify it before running the tests, becoming _"jsx": "react-jsx"_:
```
    tsconfig.jon -> {
        "compilerOptions":{
        ...
        "resolveJsonModule": true,
        "isolatedModules": true,
        "jsx": "react-jsx",
        "incremental": true,
        ...
        },
    }
```
- run
```
    npm test
```


## About_the_Author
- Clodoaldo Neto :call_me_hand:
